import EncryptedTextArea from '../encrypted-text-area/encrypted-text-area';
import { Alert, Box, Grid, Snackbar, SnackbarOrigin, TextareaAutosize, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import {
    asciiLettersAndSpaceCharsOnly,
    replaceVowels,
    lettersToNumbers,
    translateLetterToNATOAlphabetFullText,
    asciiLettersWordToLetterPositionsInAlphabethFullText,
    textToWordPuzzle,
    simplifiedPhraseIntoHiddenCharactersByLine2,
    simplifiedPhraseIntoHiddenCharactersByLineSimpler,
    shuffledWordsText,
    aixToUfux,
    reverseAllWords,
    initializeCellPhoneStr,
    retroCellphoneEncription,
    messageToPositiveWords,
} from "../../functions/confusionism_module"
// import QR from "qr-image";

export interface State extends SnackbarOrigin {
    open: boolean;
}


export interface IEncryptedTextAreaProps {
    currentText: string;
}

const EncryptedTextAreas: React.FC = () => {

    const [originalTextAreaValue, setOriginalTextAreaValue] = useState("");

    const transformationFunctionsMap = new Map();
    transformationFunctionsMap.set("lettersToNumbers", lettersToNumbers(originalTextAreaValue.toUpperCase()));
    transformationFunctionsMap.set("vowelsToSymbol", replaceVowels(originalTextAreaValue, "*"));
    transformationFunctionsMap.set("reverseAllWords", reverseAllWords(originalTextAreaValue));
    transformationFunctionsMap.set("reversedText", originalTextAreaValue.split("").reverse().join(""));
    transformationFunctionsMap.set("shuffledWords", shuffledWordsText(originalTextAreaValue));
    transformationFunctionsMap.set("reversedWordByWord", originalTextAreaValue.split(/\s/gi).reverse().join(" "));
    transformationFunctionsMap.set("letterPositionsInAlphabeth", asciiLettersWordToLetterPositionsInAlphabethFullText(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase()));
    transformationFunctionsMap.set("aixToUfux",aixToUfux(originalTextAreaValue));
    transformationFunctionsMap.set("natoAlphabeth",translateLetterToNATOAlphabetFullText(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase()));
    transformationFunctionsMap.set("natoAlphabethUppercase",translateLetterToNATOAlphabetFullText(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase()).toUpperCase());
    transformationFunctionsMap.set("textToWordPuzzle",textToWordPuzzle(originalTextAreaValue, 10));
    transformationFunctionsMap.set("simplifiedPhraseIntoHiddenCharactersByLine2",simplifiedPhraseIntoHiddenCharactersByLine2(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase(), 10));
    transformationFunctionsMap.set("simplifiedPhraseIntoHiddenCharactersByLineSimpler",simplifiedPhraseIntoHiddenCharactersByLineSimpler(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase(), 10));
    // transformationFunctionsMap.set("messageToPositiveWords",messageToPositiveWords(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase()));
    // transformationFunctionsMap.set("cellphoneString",retroCellphoneEncription(originalTextAreaValue));
    
    const handleOriginalTextAreaValueChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setOriginalTextAreaValue(event.currentTarget.value);
    }

    const [lettersToNumbersTAValue, setLettersToNumbersTAValue] = useState("");
    const [replaceVowelsTAValue, setReplaceVowelsTAValue] = useState("");
    const [natoAlphabethTAValue, setNatoAlphabethTAValue] = useState("");
    const [letterPositionsInAlphabetTAValue, setLetterPositionsInAlphabetTAValue] = useState("");
    const [reversedTextTAValue, setReversedTextTAValue] = useState("");
    const [reversedWordByWordTextTAValue, setReversedWordByWordTextTAValue] = useState("");
    const [shuffledWordsTextTAValue, setShuffledWordsTextTAValue] = useState("");
    const [reverseAllWordsTextTAValue, setReverseAllWordsTextTAValue] = useState("");


    useEffect(() => {
        setLettersToNumbersTAValue(lettersToNumbers(originalTextAreaValue.toUpperCase()));
        setReplaceVowelsTAValue(replaceVowels(originalTextAreaValue, "*"));
        setNatoAlphabethTAValue(translateLetterToNATOAlphabetFullText(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase()));
        setLetterPositionsInAlphabetTAValue(asciiLettersWordToLetterPositionsInAlphabethFullText(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase()));
        setReversedTextTAValue(originalTextAreaValue.split("").reverse().join(""));
        setReversedWordByWordTextTAValue(originalTextAreaValue.split(/\s/gi).reverse().join(" "));
        setShuffledWordsTextTAValue(shuffledWordsText(originalTextAreaValue));
        setReverseAllWordsTextTAValue(reverseAllWords(originalTextAreaValue));

    }, [originalTextAreaValue])


    const transformedTextAreasClickHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
        let textToCopyToClipboard = "";
        if ( event && event.currentTarget) {
            textToCopyToClipboard = event.currentTarget.innerHTML;
        }
        textToCopyToClipboard = textToCopyToClipboard.replaceAll("&gt;", ">");
        
        navigator.clipboard.writeText(textToCopyToClipboard);
        console.log(textToCopyToClipboard);
        opensAlert();
    };

    const textAreasStyleObj = {
        width: "90%",
        margin: "0 auto",
        resize: "none",
        height: "160px",
        overflow: "auto"
    };

    const [alertState, setAlertState] = useState<State>({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
      });

    const opensAlert = () => {
        setAlertState({
            open: true,
            vertical: 'bottom',
            horizontal: 'right',
        });
    };

    const closesAlert = () => {
        setAlertState({
            open: false,
            vertical: 'bottom',
            horizontal: 'right',
        });
    };


    return (
        <Box sx={{ marginLeft: "2.4%" }}>
            <Snackbar open={alertState.open} autoHideDuration={2000} onClose={closesAlert}>
                <Alert onClose={closesAlert} severity="success" sx={{ width: '100%' }}>
                Message copied to clipboard! Paste it on the destination!
                </Alert>
            </Snackbar>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        placeholder="Type something here!"
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        onChange={(event: React.FormEvent<HTMLTextAreaElement>) => handleOriginalTextAreaValueChange(event)}
                    />
                </Grid>
                {Array.from(transformationFunctionsMap, ([key, transformationFunction]) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={10}
                                maxRows={30}
                                style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                                value={transformationFunction}
                                onClick={transformedTextAreasClickHandler}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default EncryptedTextAreas;
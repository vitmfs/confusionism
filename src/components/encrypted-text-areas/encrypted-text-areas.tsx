import EncryptedTextArea from '../encrypted-text-area/encrypted-text-area';
import { Alert, Box, Grid, Snackbar, SnackbarOrigin, TextareaAutosize, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import {
    asciiLettersAndSpaceCharsOnly,
    replaceVowels,
    lettersToNumbers,
    reverseWord,
    translateLetterToNATOAlphabetFullText,
    asciiLettersWordToLetterPositionsInAlphabethFullText,
    textToWordPuzzle,
    simplifiedPhraseIntoHiddenCharactersByLine2,
    simplifiedPhraseIntoHiddenCharactersByLineSimpler,
    shuffledWordsText,
    aixToUfux,
    reverseAllWords,
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


    let arr: string[] = []

    useEffect(() => {
        setLettersToNumbersTAValue(lettersToNumbers(originalTextAreaValue.toUpperCase()));
        setReplaceVowelsTAValue(replaceVowels(originalTextAreaValue, "*"));
        setNatoAlphabethTAValue(translateLetterToNATOAlphabetFullText(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase()));
        setLetterPositionsInAlphabetTAValue(asciiLettersWordToLetterPositionsInAlphabethFullText(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase()));
        setReversedTextTAValue(originalTextAreaValue.split("").reverse().join(""));
        setReversedWordByWordTextTAValue(originalTextAreaValue.split(/\s/gi).reverse().join(" "));
        setShuffledWordsTextTAValue(shuffledWordsText(originalTextAreaValue));
        setReverseAllWordsTextTAValue(reverseAllWords(originalTextAreaValue));

        arr.push(lettersToNumbersTAValue);
        arr.push(replaceVowelsTAValue);
        arr.push(natoAlphabethTAValue);

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

    // const [copiedAlertOpen, setCopiedAlertOpen] = useState(false);
    const [alertState, setAlertState] = useState<State>({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
      });

    const opensAlert = () => {
        // setCopiedAlertOpen(true);
        setAlertState({
            open: true,
            vertical: 'bottom',
            horizontal: 'center',
        });
    };

    const closesAlert = () => {
        // setCopiedAlertOpen(false);
        setAlertState({
            open: false,
            vertical: 'bottom',
            horizontal: 'center',
        });
    };


    return (
        <Box sx={{ marginLeft: "2.4%" }}>
            <Snackbar open={alertState.open} autoHideDuration={6000} onClose={closesAlert}>
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
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        value={lettersToNumbersTAValue}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        onClick={transformedTextAreasClickHandler}
                        value={replaceVowelsTAValue}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto" }}
                        value={reverseAllWordsTextTAValue}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        value={reversedTextTAValue}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        value={shuffledWordsTextTAValue}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto" }}
                        value={reversedWordByWordTextTAValue}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        // onClick={(event: React.FormEvent<HTMLTextAreaElement>)=> alert(event.currentTarget.value)}
                        value={letterPositionsInAlphabetTAValue}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        value={aixToUfux(originalTextAreaValue)}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        // onClick={(event: React.FormEvent<HTMLTextAreaElement>)=> alert(event.currentTarget.value)}
                        value={natoAlphabethTAValue}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        // onClick={(event: React.FormEvent<HTMLTextAreaElement>)=> alert(event.currentTarget.value)}
                        value={textToWordPuzzle(originalTextAreaValue, 10)}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        // onClick={(event: React.FormEvent<HTMLTextAreaElement>)=> alert(event.currentTarget.value)}
                        value={simplifiedPhraseIntoHiddenCharactersByLine2(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase(), 10)}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        maxRows={30}
                        style={{ width: "90%", margin: "0 auto", resize: "none", height: "160px", overflow: "auto" }}
                        value={simplifiedPhraseIntoHiddenCharactersByLineSimpler(asciiLettersAndSpaceCharsOnly(originalTextAreaValue).toUpperCase(), 10)}
                        onClick={transformedTextAreasClickHandler}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default EncryptedTextAreas;
import { TextareaAutosize, Typography } from "@mui/material";

export interface IEncryptedTextAreaProps {
    currentText: string;
}

const EncryptedTextArea: React.FC<IEncryptedTextAreaProps> = ({currentText}) => {

    return (
        <>
            <Typography>Title</Typography>
            <TextareaAutosize
                minRows={12}
                maxRows={12}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                //     ut labore et dolore magna aliqua."
                value={currentText}
                onChange={() => alert()}
                disabled
                style={{ width: "95%", resize: "none", margin: "auto" }}/>
        </>
    );
}

export default EncryptedTextArea;
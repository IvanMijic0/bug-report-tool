import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";

const CreatBugModal = ({ open, setIsCreatedBugModalOpen }) => {
	return <Dialog onClose={ () => setIsCreatedBugModalOpen(false) } open={ open }>
		<DialogTitle>Set backup account.</DialogTitle>
		<DialogContent sx={ { marginTop: "10px", display: "flex", flexDirection: "column" } }>
			<TextField
				label="title"
				value{ title }
				onChange={ e => setTitle(e.target.value) }
			/>
			<TextField
				label="steps"
				value={ steps }
				onChange={ e => setSteps(e.target.value) }
			/>
		</DialogContent>
	</Dialog>
}

export default CreatBugModal;

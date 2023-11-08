import * as React from 'react';
import Card from '@mui/material/Card';

const BasicCard = props => {
	return (
		<Card variant="outlined" sx={ { minWidth: 275 } }>
			{ props.children }
		</Card>
	);
}

export default BasicCard;
import React from 'react';

import Aux from '../../hoc/Auxx';

const layout = (props) => (
	<Aux>
		<div>ToolBar, SideDrawer, BackDrop</div>
		<main className="Content">
			{props.children}
		</main>
	</Aux>
)

export default layout;
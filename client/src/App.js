import { Route, Switch } from "react-router-dom";

import ChannelList from "./pages/ChannelList";
import Home from "./pages/Home";

const App = () => (
	<Switch>
		<Route path="/" exact>
			<Home />
		</Route>
		<Route path="/channelList">
			<ChannelList />
		</Route>
	</Switch>
);

export default App;

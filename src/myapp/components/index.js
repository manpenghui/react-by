import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './myapp'
import servers from './myserver'

const stores = createStore(servers)

render(
	<Provider store={stores}>
		<App/>
	</Provider>

	)

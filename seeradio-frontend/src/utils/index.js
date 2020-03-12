export const logIn = (clientObj) => {
	Object.keys(clientObj).map((key)=>{
		localStorage.setItem(key, clientObj[key]);
	})
}

export const logOut = () => {
	localStorage.clear();
}

export const isLogin = () => {
	if (localStorage.getItem('token')) {
		return true;
	}
	return false;
}

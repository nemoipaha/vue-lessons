export default {
	bind(el, binding, vnode) {
		if (binding.value === 'wide') {
			el.style.maxWidth = '1200px';
		} else if (binding.value === 'narrow') {
			el.style.maxWidth = '560px';
		}	

		if (binding.arg === 'column') {
			el.style.background = '#ddd';
			el.style.padding = '20px';
		}
	}	
}
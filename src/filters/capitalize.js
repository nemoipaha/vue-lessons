export default function(value) {
	value = value.toString();
	return value.charAt(0).toUpperCase() + value.substr(1, value.length);
}
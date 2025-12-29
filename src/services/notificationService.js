const notify = (message) => {
  // Minimal notification wrapper; replace with toast library if desired
  alert(message);
};

const error = (message) => {
  console.error(message);
  alert(`Error: ${message}`);
};

export default {
  notify,
  error
};
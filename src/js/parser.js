export default function json(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(String.fromCharCode.apply(null, new Uint16Array(data))));
    }, 500);
  });
}

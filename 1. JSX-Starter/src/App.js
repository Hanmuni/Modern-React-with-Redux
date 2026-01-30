export default function App() {

  let message = "Goodbye!!!";
  if (Math.random() > 0.5) {
    message = "Hello!!!";
  }

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

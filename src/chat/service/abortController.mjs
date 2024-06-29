export function setAbortController(onStop) {
  const controller = new AbortController();
  const signal = controller.signal;

  const disconnect = () => {
    controller.abort();
    onStop && onStop();
  };

  signal.addEventListener("abort", () => {
    console.log("AbortController: aborted");
  });

  return { controller, disconnect, signal };
}

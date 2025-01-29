```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setIsRunning(false);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>Toggle</button>
    </div>
  );
}
```
```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: componentWillUnmount is not called on unmount
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // This doesn't prevent memory leaks
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```
useCallback(() => {
    console.log(‘hello world!‘);
  }, [])
  
  
  useMemo(() => {
    const fn = () => {
      console.log(‘hello world!‘);
    };
    return fn;
  }, [])
  
  
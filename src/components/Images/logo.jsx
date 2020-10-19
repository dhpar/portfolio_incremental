import React, { useEffect, useRef, useState } from 'react';

export default ({ name, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);  
  
  useEffect(() => {
    if (name || name.length > 0) {
      setLoading(true);
      const importIcon = async () => {
        try {
          ImportedIconRef.current = (await import(`../../uploads/logos/${name}.svg`)).ReactComponent;
        } catch (err) {
          throw err;
        } finally {
          setLoading(false);
        }
      };
      importIcon();
    }
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};  
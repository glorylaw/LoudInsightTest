interface UrlDatabase {
    [key: string]: string;
  }
  
  const urlDatabase: UrlDatabase = {};
  
//   const generateShortId = (): string => Math.random().toString(36).substring(2, 8);

const generateShortId = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortId = '';
    for (let i = 0; i < 6; i++) {
      shortId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortId;
  };
  
  const findLongUrl = (longUrl: string): string | undefined => {
    return Object.keys(urlDatabase).find(key => urlDatabase[key] === longUrl);
  };
  
  const findShortId = (shortId: string): string | undefined => {
    return urlDatabase[shortId];
  };

  const addUrlMapping = (shortId: string, longUrl: string): void => {
    urlDatabase[shortId] = longUrl;
  };

  const getAllUrls = (): UrlDatabase => {
    return { ...urlDatabase };
  };

  
  export {
    generateShortId,
    findLongUrl,
    findShortId,
    addUrlMapping,
    getAllUrls,
  };
  
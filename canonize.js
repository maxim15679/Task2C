export default function canonize(url) {
  const re = new RegExp('(https?:)?(\/\/)?([A-Za-z0-9]*.([A-Za-z0-9]*)\/)?(@)?([A-Za-z0-9]*)');
  const match = url.match(re);
  if (match[6]){
    return match[6];
  }else {
    return false;
  }

}

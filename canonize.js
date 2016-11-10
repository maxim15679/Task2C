export default function canonize(url) {
  const re = new RegExp('(https?:)?(\/\/)?(www.)?([A-Za-z0-9-]*.([A-Za-z0-9-]*)\/)?(@)?([A-Za-z0-9._]*)');
  const match = url.match(re);
  if (match[7]){
    return match[7];
  }else {
    return false;
  }

}

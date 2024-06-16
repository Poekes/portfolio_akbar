const offsetTopBody = (elementDom, numberOffset = 0) => {
  let newNumberOffset = elementDom.offsetTop + numberOffset;
  if (elementDom.id == "body") {
    return newNumberOffset;
  }
  return offsetTopBody(elementDom.offsetParent, newNumberOffset);
};

export default offsetTopBody;

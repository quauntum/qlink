const openPopup = () => {
  window.open(
    window.location.href,
    '_blank',
    `resizable=no,scrollbars=no,menubar=no,status=no,titlebar=no,toolbar=no,location=no,width=400,height=600,left=${window
      .screen.width - 400}`
  );
};

export default openPopup;

// Bootstrap tooltip codes

const tooltips = document.querySelectorAll(".my-tooltiping");

tooltips.forEach((tt) => {
  new bootstrap.Tooltip(tt);
});

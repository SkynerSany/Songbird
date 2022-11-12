function setVariants(names) {
  let variantsName = document.querySelectorAll('.answer__variant-name');

  variantsName.forEach((variant, i) => {
    variant.textContent = names[i].name;
  });
}

export { setVariants };

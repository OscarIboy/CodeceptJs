// enable I and another page object
const { I } = inject();

module.exports = {
  // Products
  url: '/index.php?option=com_redshopb&view=products&Itemid=101',
  newButton: "//button[contains(normalize-space(), 'New')]",
  saveCloseButton: "//button[contains(normalize-space(), 'Save & Close')]",
  saveSuccess: "Product successfully submitted.",
  deleteButton: "//button[contains(normalize-space(), 'Delete')]",
  productSku: "#jform_sku-lbl",
}
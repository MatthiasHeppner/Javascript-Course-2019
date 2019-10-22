cleanMeatCompany = class {
  constructor(name, numberofproducts, stockvalueindollar, marketshareinpercent) {
    this.name = name
    this.numberofproducts = numberofproducts
    this.stockvalueinusdollar = stockvalueindollar
    this.marketshareinpercent = marketshareinpercent
    this.rawMaterialSupplier = []
    this.foodRetailer = []


  }
  delivers(foodRetailer) {
    this.name + 'delivers' + foodRetailer.name
    foodRetailer.cleanMeatCompany.push(this)
  }

  printfoodRetailer() {
    this.foodRetailer.forEach(printName)
  }

  printRawMaterialSuppliers() {
    this.rawMaterialSupplier.forEach(printName)
  }

  procuresRawMaterials(rawMaterialSupplier) {
    (this.name + 'procures its raw materials for clean meat productrion from' + rawMaterialSupplier.name)
    
  }
}

foodRetailer = class {
  constructor(name, numberofbranches, stockvalueindollar, marketshareinpercent) {
    this.name = name
    this.numberofbranches = numberofbranches
    this.stockvalueindollar = stockvalueindollar
    this.marketshareinpercent = marketshareinpercent
    this.cleanMeatCompany = []

  }
  printOfferedCleanMeatCompanyNames() {
    this.cleanMeatCompany.forEach(printName)
  }

  offers(cleanMeatCompany) {
    this.name + 'offers' + cleanMeatCompany.name
    cleanMeatCompany.foodRetailer.push(this)
  }
}

rawMaterialSupplier = class {
  constructor(name, country, rawmaterial) {
    this.name = name
    this.country = country
    this.rawmaterial = rawmaterial

  }
  delivers(cleanMeatCompany) {
    this.name + 'delivers' + cleanMeatCompany.name
    cleanMeatCompany.rawMaterialSupplier.push(this)
  }
}


coreCow = new cleanMeatCompany("CoreCow", 47, 89, 22)
projood = new cleanMeatCompany("Projood", 25, 34, 10)
zeroSlaughter = new cleanMeatCompany("zeroSlaughter", 33, 46, 17)

rewe = new foodRetailer("REWE", 10719, 34, 16)
edeka = new foodRetailer("EDEKA", 11308, 40, 26)
aldi = new foodRetailer("ALDI", 4135, 28, 14)

celltech = new rawMaterialSupplier("CellTech", "USA", "Fetalserum")
pregoult = new rawMaterialSupplier("Pregoult", "France", "Plantbased Plasma")
biocore = new rawMaterialSupplier("Biocore", "Germany", "Antibiotics")


rewe.offers(zeroSlaughter)
edeka.offers(coreCow)
aldi.offers(projood)

coreCow.delivers(edeka)
projood.delivers(aldi)
zeroSlaughter.delivers(rewe)

celltech.delivers(projood)
pregoult.delivers(coreCow)
biocore.delivers(zeroSlaughter)

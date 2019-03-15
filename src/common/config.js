/**
  机油滤 JiYouLv
  diameter 直径
  linkWhorl 螺口
  height 高
**/

/** KongTiaoLv
  空滤 -- 方  空调滤
  length 长
  breadth 宽
  height 高
**/

/** KongLv
  环保机滤  空滤 -- 圆
  diameter 外径
  innerDiameter 内径
  height 高
**/
/**
  brand 品牌
  carType 车辆类别
  cateName 分类
**/
class LvQinQi {
  constructor ({brand, carType, cateName, code, name}) {
    this.brand = brand
    this.carType = carType
    this.cateName = cateName
    this.code = code
    this.name = name
  }
  getGoodsParameter () {
    return [{
      title: '品牌',
      value: this.brand
    }, {
      title: '车辆类别',
      value: this.carType
    }, {
      title: '分类',
      value: this.cateName
    }]
  }
}

class KongTiaoLv extends LvQinQi {
  constructor ({brand, carType, cateName, code, name, length, breadth, height}) {
    super({brand, carType, cateName, code, name})
    // 调用父类的constructor
    this.length = length
    this.breadth = breadth
    this.height = height
  }

  getGoodsParameter () {
    return [{
      title: '品牌',
      value: this.brand
    }, {
      title: '车辆类别',
      value: this.carType
    }, {
      title: '分类',
      value: this.cateName
    }, {
      title: '长',
      value: this.length
    }, {
      title: '宽',
      value: this.breadth
    }, {
      title: '高',
      value: this.height
    }]
  }
}

class JiYouLv extends LvQinQi {
  constructor ({brand, carType, cateName, code, name, diameter, height, linkWhorl}) {
    super({brand, carType, cateName, code, name})
    // 调用父类的constructor
    this.diameter = diameter
    this.height = height
    this.linkWhorl = linkWhorl
  }
  getGoodsParameter () {
    return [{
      title: '品牌',
      value: this.brand
    }, {
      title: '车辆类别',
      value: this.carType
    }, {
      title: '分类',
      value: this.cateName
    }, {
      title: '直径',
      value: this.diameter
    }, {
      title: '高',
      value: this.height
    }, {
      title: '螺口',
      value: this.linkWhorl
    }]
  }
}

class KongLv extends LvQinQi {
  constructor ({brand, carType, cateName, code, name, color, diameter, innerDiameter, height}) {
    super({brand, carType, cateName, code, name})
    // 调用父类的constructor
    this.diameter = diameter
    this.innerDiameter = innerDiameter
    this.height = height
  }
  getGoodsParameter () {
    return [{
      title: '品牌',
      value: this.brand
    }, {
      title: '车辆类别',
      value: this.carType
    }, {
      title: '分类',
      value: this.cateName
    }, {
      title: '直径',
      value: this.diameter
    }, {
      title: '内径',
      value: this.innerDiameter
    }, {
      title: '高',
      value: this.height
    }]
  }
}

class MachineOil {
  constructor ({code, cateName, model, standard, viscosity}) {
    this.code = code
    this.cateName = cateName
    this.standard = standard
    this.model = model
    this.viscosity = viscosity
  }
  getGoodsParameter () {
    return [{
      title: 'GT1编号',
      value: this.code
    }, {
      title: '适用发动机',
      value: '汽油发动机'
    }, {
      title: '机油类型',
      value: this.cateName
    }, {
      title: '净含量',
      value: this.standard
    }, {
      title: '粘度级别',
      value: this.viscosity
    }, {
      title: '机油级别',
      value: this.model
    }]
  }
}

export function createKongTiaoLv (data) {
  return new KongTiaoLv(data)
}

export function createJiYouLv (data) {
  return new JiYouLv(data)
}

export function createKongLv (data) {
  return new KongLv(data)
}

export function createLvQinQi (data) {
  return new LvQinQi(data)
}
export function createMachineOil (data) {
  return new MachineOil(data)
}

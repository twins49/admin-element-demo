const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10; // 加密强度

// 定义Schema映射表字段类型
const userSchema = new Schema({
  UserId: { type: ObjectId }, // 主键
  name: { unique: true, type: String }, // 账号
  pwd: { type: String, default: '' }, // 密码
  createTime: { type: Date, default: Date.now() }, // 账号创建时间
  lastLogin: { type: Date, default: Date.now() }, // 最后登录时间
});

// 每次存储数据时都要执行
/* eslint-disable */
userSchema.pre('save', function (next) {
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.pwd, salt, (err, hash) => {
      if (err) return next(err);
      this.pwd = hash;
      next();
    });
  });
});


// 发布模型
mongoose.model('User', userSchema, 'user');

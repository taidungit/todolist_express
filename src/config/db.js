const mongoose = require('mongoose');

const uri = 'mongodb+srv://dungmount75:taidungmongodb@cluster0.trr2wud.mongodb.net/todo-list?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('✅ Đã kết nối MongoDB Atlas với database todo-list');
    } catch (err) {
        console.error('❌ Kết nối MongoDB thất bại:', err);
        process.exit(1); // Dừng app nếu lỗi kết nối
    }
};

module.exports = connectDB;

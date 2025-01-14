const axios = require('axios');

const checkCors = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ success: false, message: 'Vui lòng cung cấp URL.' });
  }

  try {
    // Gửi yêu cầu tới URL
    await axios.get(url, { headers: { Origin: 'http://localhost:3000' } });
    res.json({ success: true, message: 'URL hỗ trợ CORS!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Không hỗ trợ CORS hoặc URL không hợp lệ.' });
  }
};

module.exports = { checkCors };

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    if (err.message.includes('Only PDF, DOC, and DOCX files are allowed.')) {
      return res.status(400).json({ msg: err.message });
    }
    res.status(500).json({ msg: 'Something went wrong' });
  };
  
  module.exports = { errorHandler };
  
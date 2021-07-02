const express = require("express");
const {quizData} =  require("./data")
const router = express.Router();

router.get("/questions",async (req, res) => {
  try{
    res.json({
      success: true,
      questions: quizData
    })
  }catch(err){
    res.json({
      success: false,
      message: "problem while retrieving data, for more detail see error Message",
      errorMessage: err.message
    })
  }
});
router.get("/categories/:category",async(req,res)=> {
  try{
  const quizQuestion = quizData.questions.filter(quest => quest.category === req.category);
  const questions = quizQuestion.map(question => {

    const {incorrect_answers, correct_answer} = question;
    const options = [...incorrect_answers];
    const tempOption = Math.floor(Math.random() * 4);

    if (tempOption === 3) {
      options.push(correct_answer);
      question.incorrect_answers = undefined;
      return {...question, options}
    } else {
      options.push(options[tempOption]);
      options[tempOption] = correct_answer;
            question.incorrect_answers = undefined;
      return {...question, options}
    }
  })
  res.json({
    success: true,
    questions
  })
  }catch(err){
    res.json({
      success: false,
      message: "error while retrieving data",
      errorMessage: err
    })
  }
})

router.param("category",async (req, res, next, category)=> {
 try { 
   req.category = category;
   }catch(err){
     res.json({
       success: false,
       message: "error in finding the queried category"
     })
   }
  next();
})

module.exports = router;
const { prisma } = require("../prisma/prisma-client");



const all = async (req,res) => {
   try {
    const page = parseInt(req.query.page) || 1; 
    const limit = 14; 
    const offset = (page - 1) * limit; 

    const totalRecords = await prisma.data.count();

    const totalPages = Math.ceil(totalRecords / limit);

    const records = await prisma.data.findMany({
      skip: offset,
      take: limit,
    });

    if(records.length) {
        res.status(200).json({
            records,
            currentPage: page, 
            totalPages 
          });
    } else {
        res.status(500).json({message: 'Не удалось получить данные'})
    }

   } catch(e) {
    res.status(500).json({message: 'Не удалось получить данные'})
   }
}

module.exports = {
    all
}
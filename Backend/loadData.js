const fs = require('fs');
const path = require('path');
const { prisma } = require("./prisma/prisma-client");

const csv = require('csv-parser');

async function loadCsv() {
  const results = [];
  fs.createReadStream(path.join(__dirname, 'article_def_v_orig.csv'))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const row of results) {
        await prisma.data.create({
          data: {
            articleid: row.articleid,
            subarticleid: row.subarticleid,
            articlename: row.articlename,
            external_str_id: row.external_str_id,
            ecrlongname: row.ecrlongname,
            ecrsectionid: row.ecrsectionid,
            sectionname: row.sectionname,
            articlebarcode: row.articlebarcode,
            unitname: row.unitname,
            sectiontype: row.sectiontype,
            rest: row.rest,
            flgbase: row.flgbase,
            subarticlebarcode: row.subarticlebarcode,
            flg_disable: row.flg_disable,
            flg_disable_name: row.flg_disable_name,
            preparemoment_name: row.preparemoment_name,
            baseprice: row.baseprice,
            ecological_class: row.ecological_class,
            articletype: row.articletype,
            article_type_name: row.article_type_name,
            tax_system: row.tax_system,
            tag_1212: row.tag_1212,
            tag_1162: row.tag_1162,
            tag_1162_name: row.tag_1162_name,
            subarticle_marking: row.subarticle_marking,
            subarticle_marking_name: row.subarticle_marking_name,
            has_any_bc_marking: row.has_any_bc_marking,
            has_mrc: row.has_mrc,
            isloto: row.isloto,
            class_path: row.class_path,
            strpath: row.strpath,
          },
        });
      }
      console.log('Data loaded successfully');
      await prisma.$disconnect();
    });
}

loadCsv();

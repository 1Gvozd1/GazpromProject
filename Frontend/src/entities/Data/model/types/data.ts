export interface DataSchema {
    id: number;
    articleid: string;
    subarticleid: string;
    articlename: string;
    external_str_id?: string;
    ecrlongname?: string;
    ecrsectionid?: string;
    sectionname?: string;
    articlebarcode?: string;
    unitname?: string;
    sectiontype?: string;
    rest?: string;
    flgbase?: string;
    subarticlebarcode?: string;
    flg_disable?: string;
    flg_disable_name?: string;
    preparemoment_name?: string;
    baseprice?: string;
    ecological_class?: string;
    articletype?: string;
    article_type_name?: string;
    tax_system?: string;
    tag_1212?: string;
    tag_1162?: string;
    tag_1162_name?: string;
    subarticle_marking?: string;
    subarticle_marking_name?: string;
    has_any_bc_marking?: string;
    has_mrc?: string;
    isloto?: string;
    class_path?: string;
    strpath?: string;
  }

export interface Data { 
    records: DataSchema[],
    currentPage: number,
    totalPages: number,
}

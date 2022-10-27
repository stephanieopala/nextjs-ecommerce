import {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "product";
    readonly columns: readonly [
      {
        readonly name: "name";
        readonly type: "string";
        readonly unique: true;
      },
      {
        readonly name: "description";
        readonly type: "text";
      },
      {
        readonly name: "category";
        readonly type: "link";
        readonly link: {
          readonly table: "product_category";
        };
      },
      {
        readonly name: "image_url";
        readonly type: "string";
        readonly unique: true;
      },
      {
        readonly name: "price";
        readonly type: "int";
      }
    ];
  },
  {
    readonly name: "product_category";
    readonly columns: readonly [
      {
        readonly name: "name";
        readonly type: "string";
        readonly unique: true;
      }
    ];
  }
];
export declare type SchemaTables = typeof tables;
export declare type InferredTypes = SchemaInference<SchemaTables>;
export declare type Product = InferredTypes["product"];
export declare type ProductRecord = Product & XataRecord;
export declare type ProductCategory = InferredTypes["product_category"];
export declare type ProductCategoryRecord = ProductCategory & XataRecord;
export declare type DatabaseSchema = {
  product: ProductRecord;
  product_category: ProductCategoryRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};

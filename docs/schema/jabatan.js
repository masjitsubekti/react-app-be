// Komponen Schema
let JabatanSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "ID jabatan",
      example: "",
    },
    nama: {
      type: "string",
      description: "Nama jabatan",
      example: "",
    },
    kode_unor: {
      type: "string",
      description: "Kode Unor",
      example: "",
    },
  },
};

let error = {
  type: "object",
  properties: {
    success: {
      type: "boolean"
    },
    message: {
      type: "string",
    },
    code: {
      type: "string",
    },
  },
}

// Set Tag
let tag = {
  name: "Master Jabatan",
}

// Set Path URL
let path = {
  "/v1/master/jabatan/all": {
    get: {
      tags: ["Master Jabatan"],
      description: "Get All master jabatan",
      parameters: [],
      responses: {
        200: {
          description: "List data master jabatan",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Jabatan",
              },
            },
          },
        },
        404: {
          description: "Data was not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  },
};

module.exports = {
  components: {
    schemas: {
      // add schema is here
      Jabatan: JabatanSchema,
      Error: error
    },
  },
  tags: tag,
  paths: path
};

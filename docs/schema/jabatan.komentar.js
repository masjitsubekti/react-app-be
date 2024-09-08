/**
 * @swagger
 * components:
 *   schemas:
 *     Jabatan:
 *       type: object
 *       required:
 *         - nama
 *         - kode_unor
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         nama:
 *           type: string
 *           description: The book title
 *         kode_unor:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         nama: The New Turing Omnibus
 *         kode_unor: Alexander K. Dewdney
 */

/**
 * @swagger
 * tags:
 *   name: Jabatan
 *   description: The books managing API
 */

/** 
 * @swagger
 * /v1/master/jabatan/all:
 *   get:
 *     summary: Lists all the books
 *     tags: [Jabatan]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jabatan'
 * 
 * /v1/master/jabatan:
 *   post:
 *     summary: Create a new book
 *     tags: [Jabatan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jabatan'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jabatan'
 *       500:
 *         description: Some server error
 * 
 * /v1/master/jabatan/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Jabatan]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jabatan'
 *       404:
 *         description: The book was not found
 * 
 *   put:
 *    summary: Update the book by the id
 *    tags: [Jabatan]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Jabatan'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Jabatan'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 * 
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Jabatan]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _daos_1 = require("@daos");
const _shared_1 = require("@shared");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const TestController_1 = require("../controllers/TestController");
const router = express_1.Router();
const userDao = new _daos_1.UserDao();
router.get('/test', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userDao.getAll();
        let testcomn = new TestController_1.TestController();
        testcomn.TestFunction(req, res);
        return res.status(http_status_codes_1.OK).json({ users });
    }
    catch (err) {
        _shared_1.logger.error(err.message, err);
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: err.message,
        });
    }
}));
exports.default = router;
//# sourceMappingURL=Test.js.map
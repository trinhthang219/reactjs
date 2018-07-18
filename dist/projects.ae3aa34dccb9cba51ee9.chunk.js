webpackJsonp([1],{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Projects = __webpack_require__(418);

var _Projects2 = _interopRequireDefault(_Projects);

var _banners = __webpack_require__(100);

var _index = __webpack_require__(432);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Component: _Projects2.default,
  reducer: _index2.default,
  picture: _banners.BANNER_SUMMER,
  title: "My projects",
  subtitle: "A little about what I've done until now"
};

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncComponent = function (_PureComponent) {
  _inherits(AsyncComponent, _PureComponent);

  function AsyncComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AsyncComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AsyncComponent.__proto__ || Object.getPrototypeOf(AsyncComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = { Component: null }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AsyncComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.promise.then(function (Component) {
        return _this2.setState({ Component: Component });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Component = this.state.Component;

      if (!Component) return null;

      return this.props.children(Component);
    }
  }]);

  return AsyncComponent;
}(_react.PureComponent);

AsyncComponent.propTypes = {
  promise: _propTypes.object.isRequired
};
exports.default = AsyncComponent;

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactProgressiveImage = __webpack_require__(406);

var _reactProgressiveImage2 = _interopRequireDefault(_reactProgressiveImage);

var _classnames = __webpack_require__(101);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(407);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransitionBlock = function TransitionBlock(_ref) {
  var src = _ref.src,
      trace = _ref.trace,
      alt = _ref.alt,
      show = _ref.show,
      transitionReady = _ref.transitionReady;
  return _react2.default.createElement(
    "div",
    { className: "wrapper" },
    _react2.default.createElement("img", { className: (0, _classnames2.default)("thumb", { fade: transitionReady }), src: trace, alt: alt }),
    show ? _react2.default.createElement("img", { className: (0, _classnames2.default)("picture", { ready: transitionReady }), src: src, alt: alt }) : null
  );
};

var ProgressiveImageLoader = function (_PureComponent) {
  _inherits(ProgressiveImageLoader, _PureComponent);

  function ProgressiveImageLoader() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ProgressiveImageLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ProgressiveImageLoader.__proto__ || Object.getPrototypeOf(ProgressiveImageLoader)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { reachedViewPort: false, transition: false }, _this.intersectionObs = new IntersectionObserver(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          entry = _ref4[0];

      if (entry.isIntersecting) {
        _this.setState({ reachedViewPort: true });
        _this.intersectionObs.disconnect();
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProgressiveImageLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.intersectionObs.observe(this.refs.wrapper);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.intersectionObs.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          image = _props.image,
          alt = _props.alt,
          className = _props.className;
      var _state = this.state,
          transition = _state.transition,
          reachedViewPort = _state.reachedViewPort;

      var timeout = 10;

      return _react2.default.createElement(
        "div",
        { ref: "wrapper" },
        reachedViewPort ? _react2.default.createElement(
          _reactProgressiveImage2.default,
          { src: image.src, placeholder: image.trace },
          function (src, loading) {
            if (!loading) setTimeout(function () {
              return _this2.setState({ transition: true });
            }, timeout);
            return _react2.default.createElement(
              "div",
              { className: (0, _classnames2.default)("progressive-image-loader", className) },
              _react2.default.createElement(TransitionBlock, _extends({ transitionReady: transition, show: !loading }, image, { alt: alt }))
            );
          }
        ) : _react2.default.createElement("img", { src: image.trace })
      );
    }
  }]);

  return ProgressiveImageLoader;
}(_react.PureComponent);

exports.default = ProgressiveImageLoader;

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressiveImage = function (_React$Component) {
  _inherits(ProgressiveImage, _React$Component);

  function ProgressiveImage(props) {
    _classCallCheck(this, ProgressiveImage);

    var _this = _possibleConstructorReturn(this, (ProgressiveImage.__proto__ || Object.getPrototypeOf(ProgressiveImage)).call(this, props));

    _this.loadImage = function (src) {
      // If there is already an image we nullify the onload
      // and onerror props so it does not incorrectly set state
      // when it resolves
      if (_this.image) {
        _this.image.onload = null;
        _this.image.onerror = null;
      }
      var image = new Image();
      _this.image = image;
      image.onload = _this.onLoad;
      image.onerror = _this.onError;
      image.src = src;
    };

    _this.onLoad = function () {
      // use this.image.src instead of this.props.src to
      // avoid the possibility of props being updated and the
      // new image loading before the new props are available as
      // this.props.
      _this.setState({
        image: _this.image.src,
        loading: false
      });
    };

    _this.onError = function (errorEvent) {
      var onError = _this.props.onError;

      if (onError) {
        onError(errorEvent);
      }
    };

    _this.state = {
      image: props.placeholder,
      loading: true
    };
    return _this;
  }

  _createClass(ProgressiveImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var src = this.props.src;

      this.loadImage(src);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var src = nextProps.src,
          placeholder = nextProps.placeholder;
      // We only invalidate the current image if the src has changed.

      if (src !== this.props.src) {
        this.setState({ image: placeholder, loading: true }, function () {
          _this2.loadImage(src);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.image) {
        this.image.onload = null;
        this.image.onerror = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          image = _state.image,
          loading = _state.loading;
      var children = this.props.children;

      if (!children || typeof children !== "function") {
        throw new Error("ProgressiveImage requires a function as its only child");
      }
      return children(image, loading);
    }
  }]);

  return ProgressiveImage;
}(React.Component);

exports.default = ProgressiveImage;


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(408);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(392)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./_progressive_image_loader.scss", function() {
		var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./_progressive_image_loader.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(391)(false);
// imports


// module
exports.push([module.i, ".progressive-image-loader .wrapper {\n  position: relative; }\n  .progressive-image-loader .wrapper .picture {\n    opacity: 0;\n    transition: opacity 200ms ease-in;\n    position: absolute;\n    top: 0;\n    left: 0; }\n    .progressive-image-loader .wrapper .picture.ready {\n      opacity: 1; }\n  .progressive-image-loader .wrapper .thumb {\n    transition: opacity 200ms ease-out;\n    opacity: 1; }\n    .progressive-image-loader .wrapper .thumb.fade {\n      opacity: 0; }\n", ""]);

// exports


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importWithTrace = undefined;

var _webp = __webpack_require__(410);

var importWithTrace = exports.importWithTrace = function importWithTrace(pngImporter, webpImporter) {
  return (0, _webp.checkWebpFeature)().then(function (compatible) {
    return compatible && webpImporter ? pngImporter.then(function (png) {
      return webpImporter.then(function (webp) {
        return { src: webp, trace: png.trace };
      });
    }) : pngImporter;
  });
};

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _testImages;

var _templateObject = _taggedTemplateLiteral(["LOSSY"], ["LOSSY"]),
    _templateObject2 = _taggedTemplateLiteral(["LOSSLESS"], ["LOSSLESS"]),
    _templateObject3 = _taggedTemplateLiteral(["ALPHA"], ["ALPHA"]),
    _templateObject4 = _taggedTemplateLiteral(["ANIMATION"], ["ANIMATION"]);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WEBP_ = function WEBP_(type) {
  return "WEBP_" + type;
};
var WEBP_LOSSY = exports.WEBP_LOSSY = WEBP_(_templateObject);
var WEBP_LOSSLESS = exports.WEBP_LOSSLESS = WEBP_(_templateObject2);
var WEBP_ALPHA = exports.WEBP_ALPHA = WEBP_(_templateObject3);
var WEBP_ANIMATION = exports.WEBP_ANIMATION = WEBP_(_templateObject4);

var testImages = (_testImages = {}, _defineProperty(_testImages, WEBP_LOSSY, "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"), _defineProperty(_testImages, WEBP_LOSSLESS, "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="), _defineProperty(_testImages, WEBP_ALPHA, "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="), _defineProperty(_testImages, WEBP_ANIMATION, "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"), _testImages);

var checkWebpFeature = exports.checkWebpFeature = function checkWebpFeature() {
  var feature = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : WEBP_LOSSY;

  var img = new Image();

  return new Promise(function (res, rej) {
    img.onload = function () {
      return res(img.width > 0 && img.height > 0);
    };
    img.onerror = function () {
      return res(false);
    };

    img.src = "data:image/webp;base64," + testImages[feature];
  });
};

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOAD_PROJECTS = exports.LOAD_PROJECTS = 'LOAD_PROJECTS';
var LOAD_PROJECTS_SUCCESS = exports.LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
var LOAD_PROJECTS_ERROR = exports.LOAD_PROJECTS_ERROR = 'LOAD_PROJECTS_ERROR';

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(21);

var _Projects = __webpack_require__(419);

var _Projects2 = _interopRequireDefault(_Projects);

var _projects = __webpack_require__(430);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var projects = _ref.projects;
  return { projects: projects };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadProjects: function loadProjects() {
      return dispatch((0, _projects.loadProjects)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Projects2.default);

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProjectCard = __webpack_require__(420);

var _ProjectCard2 = _interopRequireDefault(_ProjectCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_PureComponent) {
  _inherits(Projects, _PureComponent);

  function Projects() {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
  }

  _createClass(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.loadProjects();
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = this.props.projects || {},
          data = _ref.data;

      if (!data) return null;

      return _react2.default.createElement(
        "div",
        { id: "projects" },
        data.map(function (project, idx) {
          return _react2.default.createElement(_ProjectCard2.default, _extends({ key: idx }, project));
        })
      );
    }
  }]);

  return Projects;
}(_react.PureComponent);

Projects.propTypes = {};
exports.default = Projects;
;

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Thumb = __webpack_require__(421);

var _Thumb2 = _interopRequireDefault(_Thumb);

var _github = __webpack_require__(429);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var title = _ref.title,
      project_name = _ref.project_name,
      page = _ref.page,
      picture = _ref.picture,
      description = _ref.description;
  return _react2.default.createElement(
    "div",
    { className: "card" },
    _react2.default.createElement(_Thumb2.default, { projectName: project_name, url: page || (0, _github.getRepoUrl)(project_name) }),
    _react2.default.createElement(
      "div",
      { className: "card-body" },
      _react2.default.createElement(
        "h5",
        { className: "card-title" },
        title
      ),
      _react2.default.createElement("p", { className: "card-text", dangerouslySetInnerHTML: { __html: description } })
    ),
    _react2.default.createElement(
      "div",
      { className: "card-footer text-center" },
      _react2.default.createElement(
        "div",
        { className: "btn-group" },
        page ? _react2.default.createElement(
          "a",
          { target: "_blank", rel: "nofollow", role: "button", href: page,
            className: "btn btn-primary btn-sm" },
          "Check live ",
          _react2.default.createElement("i", { className: "fa fa-external-link-square" })
        ) : null,
        _react2.default.createElement(
          "a",
          { role: "button", rel: "nofollow", href: (0, _github.getRepoUrl)(project_name),
            className: "btn btn-secondary btn-sm", target: "_blank" },
          "Check on Github ",
          _react2.default.createElement("i", { className: "fa fa-github" })
        )
      )
    )
  );
};

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AsyncComponent = __webpack_require__(404);

var _AsyncComponent2 = _interopRequireDefault(_AsyncComponent);

var _ProgressiveImageLoader = __webpack_require__(405);

var _ProgressiveImageLoader2 = _interopRequireDefault(_ProgressiveImageLoader);

var _image = __webpack_require__(409);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thumbImporter = function thumbImporter(projectName, ext) {
  return __webpack_require__(422)("./" + projectName + "." + ext);
};

var thumbPromise = function thumbPromise(pName) {
  return (0, _image.importWithTrace)(thumbImporter(pName, 'png'), thumbImporter(pName, 'webp'));
};

exports.default = function (_ref) {
  var projectName = _ref.projectName,
      url = _ref.url;
  return _react2.default.createElement(
    "a",
    { rel: "nofollow", href: url, target: "_blank" },
    _react2.default.createElement(
      _AsyncComponent2.default,
      {
        promise: thumbPromise(projectName) },
      function (path) {
        return _react2.default.createElement(_ProgressiveImageLoader2.default, { className: "card-img-top", image: path, alt: projectName });
      }
    )
  );
};

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./findabike.png": 423,
	"./findabike.webp": 424,
	"./leaflet-ant-path.png": 425,
	"./leaflet-ant-path.webp": 426,
	"./webpack-chrome-extension-reloader.png": 427,
	"./webpack-chrome-extension-reloader.webp": 428
};
function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(__webpack_require__);
};
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		var id = map[req];
		if(!(id + 1)) // check for number or string
			throw new Error("Cannot find module '" + req + "'.");
		return id;
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = 422;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "dist/assets/b7710d880105cfbfd0f87051d3043f50.png" , "trace": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='279' height='235' viewBox='0 0 279 235'%3E%3Cpath d='M198 4.2c0 .2 3.6 5.5 7.9 11.8l7.8 11.5 21.6.3 21.6.2 2 2.7c2.6 3.2 2.6 4.4.2 7.4-1.8 2.3-2.5 2.4-19 2.9l-17 .5 6.6 9.8 6.7 9.7h17.7c16 0 17.8-.2 18.2-1.8.3-1 .4-13.6.3-28.2l-.1-26.5-37.3-.3c-20.4-.1-37.2-.1-37.2 0m-93.5 71.9c-.4.6-1.3.8-2 .6-1.5-.7-6.3 2.5-5.9 3.8.6 1.8-8.3 7.6-13.8 9-6.9 1.9-7.8 1.9-7.9-.3 0-1.4-.2-1.4-1 .4C73 91 71.2 92 66.4 93c-3.6.7-6.3 1.4-6 1.7.2.2 6.3-.7 13.4-2.1a73.5 73.5 0 0 1 14.9-2c1.3.4 1.4.3.5-.3-1-.8-1-1.2.3-2.3 1.2-1 1.5-1 1.6.1 0 .8.5.5 1-.6a9.2 9.2 0 0 1 2.9-3.3c1.5-1 2-.7 3.3 1.2 3.4 5.1 11.6-.1 8.6-5.5-.7-1.3-1.2-3-1-3.7.2-1.5-.5-1.6-1.4-.1m55.6 4.2c0 1-.8 1.7-1.7 1.7-1 0-1.3.6-1 2 .6 1.5.3 1.8-1.6 1.4l-2.3-.5 2.2 1 2.2 1-2.5 6.2-2.4 6.5s-1.1 0-2.4-.3c-1.8-.4-3.2.3-5 2.2-2.5 2.7-3.7 8.3-1.5 7 .7-.5 1 .3.7 2-.3 2.7-.6 2.8-6 3a24 24 0 0 0-7.4 1.3c-1.5.8-1.2 1 1.4.7 1.8 0 3.5-.5 3.9-.9.8-.8 5.3-.8 5.3 0 0 .3-1 1.5-2.3 2.6l-2.2 2 2.8-1.6c2.7-1.6 2.9-1.6 5.1.5 2.2 2.1 2.6 5.6.5 4.3-.5-.3-.6.2-.2 1.2.5 1.4.8 1.3 1.9-.7.8-1.6 1-3 .3-4.1-.6-1.2-.6-1.8 0-1.8 1.7 0 1.3-1.7-.5-2.4-.8-.3-1.2-.2-.9.4.3.6.2 1-.3 1-1.6 0-2.2-1.3-1-2.6.7-1 1.5-1 3-.3 1.4.8 2.5.7 4.2-.4 1.9-1.3 2.6-1.3 4.7-.1 1.3.7 4.4 1.3 6.9 1.2h4.5l-5.2-.7c-6.4-.8-8-2.1-6.6-5.3.8-1.8.6-2.9-1-5-1.8-2.7-1.8-3-.1-7.6 2.3-6.3 3-7 6-6.4 1.4.2 2.4 0 2.4-.7 0-.6-.9-1.1-2-1.1-2.6 0-3.3-1.5-2-4 .6-1.2 1-2.6.6-3.3-.2-.7-.5-.4-.5.5m-28.4 1.1a11 11 0 0 0-2.4 4.2c-1 2.7-.7 3.4 1.8 6 2 2 3.5 2.6 5.3 2.3 1.9-.4 2.3-.1 1.9 1.1-.3.9.7-.2 2-2.4 2-2.8 2.5-4.8 2.1-6.8-.4-1.8-.1-2.7.8-2.8.7 0-.3-.5-2.2-1l-5.7-1.2a5 5 0 0 0-3.6.6m36.3 1.8c-1.2.8-1.2 1 .5.8 3.5-.3 3.7 0 1.4 3.3A44.4 44.4 0 0 1 167 91c-1.5 1.4-9 13-8.3 13 .4 0 2.6-2.7 4.7-6l4-5.8 4.2 3c4 2.8 6.4 6.3 6.4 9.3 0 .8.8 1.8 1.7 2.3 1.5.9 1.2 1.3-1.8 3-4 2.5-3.2 3 1.2.7l3-1.6 2.6 5.8c1.4 3.2 2.8 8 3 10.5.4 3.6 1 4.8 2.2 4.8 1 0 1.2-.3.6-.8-.6-.4-1.1-2.4-1.2-4.4-.3-3.1 0-3.8 2.5-4.7 2.7-1 2.6-1-.6-.5-3 .5-3.3.3-5.2-4.1-2.7-6.2-2.6-6.9 1.4-8.8 3.1-1.4 3.5-1.4 4 0 .4.9.9 1.3 1.2 1 .3-.3-.2-1.7-1.2-3.2-1.6-2.5-1.9-2.6-2.6-.9-.7 1.5-.7 1.4-.4-.5.3-1.5-.3-3.8-1.5-5.8-2.2-3.6-3.6-4.6-1.9-1.3 1 1.8.8 2-1.8 2-1.5 0-3.2.4-3.8.9-.5.6-3-.8-6-3.3l-5.2-4.3 2-3.1c1.1-1.8 2.2-3.2 2.5-3.2.2 0 2.4 1.4 4.9 3 2.4 1.7 4.4 2.7 4.4 2.3 0-.5-2.3-2.2-5-3.8-2.8-1.6-5-3.3-5-3.7 0-1.1-2.2-1-4 .3m39 35.3l1.3 4.2a58 58 0 0 1 2 6.7c.8 2.9.8 2.9-3.2 2.2-5.3-.9-7.8 0-9.7 3.6-2 4-.2 8 4.3 9.4 1.8.5 3.3 1.3 3.3 1.7 0 1-.7 1-6.5-.7-2.7-.9-4.5-1.2-4-.7.6.5 3 1.4 5.3 2 4.2 1.3 4.3 1.4 3.7 4.5-.4 1.8-2.4 5.7-4.6 8.8a35 35 0 0 0-4.5 9.6c-.6 3.7-.3 4.3 4.8 9.8 3.4 3.7 5.2 6.5 5 7.8-.2 1.2 0 1.7.7 1.3 2-1.2 1.2-2.7-4.5-9.1-5.2-6-5.5-6.6-4.8-10.2.4-2 .9-3.3 1.1-2.7.4 1.3 4.3.7 4.3-.6 0-.5-1-1-2-1.2-1.9-.3-1.8-.7 1.5-5.2 2-2.7 3.5-5.7 3.5-6.5a7 7 0 0 1 1-3c.8-1.4 1.1-1.3 2.4.4.9 1.1 1.6 1.4 1.6.8 0-.7.5-1.3 1-1.3.6 0 1 .3.7.8-.3.4 3.7.8 8.9.9 5.2 0 9.4-.2 9.4-.6 0-.7-.6-.8-11.8-1-3.9 0-6-.5-5.7-1 .3-.7 0-.8-1-.5-1 .4-1.5 0-1.6-1.2 0-1.1-.3-1.4-.6-.7-.6 1.7-2.3 1.7-2.3 0 0-1.8 4.2-5.7 6-5.7.9 0 2.7.8 4 1.7l2.5 1.7-2-2.2a6.4 6.4 0 0 0-4.2-2.2c-1.2 0-2.3-.6-2.3-1.3 0-.6-.3-2.2-.6-3.4-.4-1.4-.2-2.3.5-2.3.6 0 1.2.8 1.2 1.8s.5.3.8-1.3c.4-1.7.4-3.4 0-4a62 62 0 0 1-2.3-6.3c-1.5-4.3-2.6-6.5-2.6-4.8m-92 6.1c0 3.5 0 3.9-1 5-1.2 1.6-2.2 6.7-1.1 6 .5-.2 2.3.3 4 1.2 2.8 1.7 3.2 1.7 5.8.2 1.5-1 3.2-2.6 3.8-3.8a4 4 0 0 1 3-2.2c1 0 1.4-.3.8-.6-.7-.2-1.4-.3-1.6-.1-.2.2-1.1-.5-2-1.4-1.8-1.8-2.3-4.3-.7-3.3.5.3 1 0 1-.7 0-1 .3-.9 1 .2.8 1.3 1 1.2 1-.4 0-1.3-.5-1.7-2-1.3-1.1.3-2.2.2-2.5-.3-.6-1-5.6 0-7.3 1.3-1 .7-1 .6-.6-.7.3-.9.1-1.6-.5-1.6s-1.1 1.1-1.1 2.5m119.3 0c-.7.7-1.8 1.5-2.5 1.7-1.5.5-1.3 5.5.4 7.6 1 1.2.7 2-2.2 4-2 1.5-4.6 3.9-6 5.3a24.7 24.7 0 0 1-4.5 3.7c-1.1.6-1.4 1.2-.8 1.2a66 66 0 0 0 10.7-7.9c9.2-7.8 10.8-8.7 16.3-9.7 10-2 10.8-2.3 3.8-2-3.8.2-7.9.7-9 1-1.6.6-2.3 0-3.5-2.7-1.2-2.8-1.7-3.2-2.7-2.2m21.9 5.6c-1 1.5-1.1 3.6-.6 7.3.4 2.8 1 4.3 1.2 3.3.2-1.1 1.3-1.7 3.2-1.7 3.7 0 5.1-2 4.8-6.9-.3-4-.4-4.1-3.8-4.1-2.5 0-3.9.6-4.8 2.1m-204.3 7c-1.4 1.4-1.9 2.8-1.5 4.4.4 1.7.1 2.5-1.1 2.7-1 .3.6.8 3.6 1.2 4.6.7 5.7.5 8.1-1.3 2-1.4 3-1.7 3.3-.8.3.6.5.3.5-.8s.2-3.3.6-5c.6-2.7.5-2.6-1.6 1-2 3.5-2.3 3.7-2.6 1.8-.3-2.4-3.7-5.3-6-5.3-.6 0-2.1 1-3.3 2m23 3.8c-1.6 1.4-2.3 3-2.3 5.6 0 4.5 1.1 5.7 6.2 6.2 3 .3 4.2 0 4.7-1.4 1.2-2.9 1.3-8.2.1-9.7-2-2.5-6-2.8-8.6-.7M36 142c0 1-1 1.7-2.7 1.8-1.4.1-4 1-5.7 2.2-4.2 2.7-12.4 7-13.2 7-.3 0 0-.7.7-1.7 1.2-1.4 1.2-1.6-.1-1.1-1.6.5-2.3 4.8-.7 4.5.5-.1 1.2.4 1.5 1.2.3 1 0 1.2-1.4.8-1.8-.7-1.8-.6 0 .8 2 1.6 5.6 2 5.6.7 0-.4-.9-1.3-2-2-3-1.8-2.5-2.8 2.2-4.6 3.2-1.4 4.3-1.4 4.9-.5.4.7.5 1.7.2 2.2-.3.4.3 1.5 1.3 2.2 1.8 1.3 1.7 1.4-.9 1.5-3.7 0-3.4 1.5.5 1.8 4.8.4 9.2-1.5 11.1-4.8 1.8-3 1.5-8-.6-8-3 0 1.1-1.5 5.6-2l5.2-.7-5.2-.2c-3 0-5.3-.6-5.6-1.3-.4-.9-.6-.8-.6.2m96 13.7c2.7.3 4 1 4.8 3 .8 1.7.8 2.2 0 1.7-.8-.4-.8 0 0 1.5.7 1.1.9 2.1.5 2.1s.5.9 1.9 2a10 10 0 0 0 5 2c3.2 0 6.1-4 5.5-7.4-.5-2.7 2.2-4.2 4.1-2.3.8.8 1.1.7 1.1-.5s-1.6-1.7-7.6-2.3c-5-.4-7.9-.3-8.3.3-.4.7-1.2.8-2.1.2-.8-.6-3-.9-5-.8l-3.5.1 3.6.4m-76.7 14a6 6 0 0 0-1.7 2.6c-.4 1.2-1.8 1.7-4.4 1.8-3 0-3.3.2-1.8.8 1.1.5 2.6.7 3.4.6.7 0 2.4.9 3.7 2.2 1.3 1.3 3 2.3 3.9 2.3 2 0 5.5-3.6 5.5-5.8 0-3.7-5.5-6.5-8.6-4.4M31 174.6c0 .3 1.1 2 2.5 3.8a13 13 0 0 1 2.5 6.4v3.2l-7.8.1H16.8c-2.2-.1-3.6.2-3.3.7.3.5 2.8.9 5.5.8 2.7 0 4.7.3 4.4.8-.3.4.5.5 1.8 0 1.3-.4 4.6-.7 7.4-.7 4.6 0 5-.1 5.1-2.4.3-4.6 2.7-4.1 5 1 .7 1.8 1.3 2.6 1.4 2 0-1.1.4-1.1 2.3 0 1.5.8 6 1.2 14.4 1 13.1-.1 15.7-1 14.2-4.8-.7-2-.8-2-.8.1 0 1.8-1 2.2-5.3 2.8a53 53 0 0 1-21.2-.8c-1.5-.7-4.3-2.8-6.2-4.6-3.2-2.9-3.5-3.6-3-6.7.5-2.4.4-3.3-.3-2.8-.6.3-1.1 1.6-1.1 2.8 0 2.1-.2 2-2.5-.6s-3.5-3.3-3.5-2.1m69.1 11c-2.3 6.4-2.3 6.5-4.4 4.7-2-1.8-2-1.8-.3.8.9 1.4 1.4 3.4 1 4.3-.4 1-.1 1.6.7 1.6 1 0 1 .3-.1 1-1.2.8-1 1 1 1s2.2.2 1 1c-1.3.8-1.2 1 .3 1 1 0 2.8.6 4 1.4 1.2.8 6 1.9 10.7 2.4a29 29 0 0 1 14.5 4.6c3.2 2 6.4 4 7 4.6 1.2 1.3 2.8 1.3 2 0-.4-.6.8-1 2.7-1.1 3.4-.1 2.9-.3-3.4-1.4-2-.3-5.8-2-8.5-3.8-8-5.3-11.4-6.6-19.3-7.1l-7.9-.6c-.2 0 0-.7.2-1.4.4-1 .1-1.3-.7-1-2.6 1-2.4-2.5.4-10.5 1.6-4.5 2.6-8.1 2.2-8.1-.4 0-1.8 3-3 6.6m68.6-2c-.3.3-2 .6-3.5.6-2.6 0-3 .5-2.9 3 0 1.5.4 2.8.8 2.8s.5.6.2 1.4c-.3.8.4 2.4 1.6 3.6 1.7 1.7 3 2 5.2 1.6 4-.8 5.7-3.2 5.8-8 0-2.7.3-3.5 1.3-3 .8.5.9.4.2-.3-1.2-1.3-7.9-2.6-8.7-1.7' fill='%23d2dde6' fill-rule='evenodd'/%3E%3C/svg%3E" };

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/9a2f5cf92a7aa2e62d234e2332d0d62b.webp";

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "dist/assets/b45aff32448c963a93833554cad7a71d.png" , "trace": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='161' viewBox='0 0 280 161'%3E%3Cpath d='M0 24v24l140.3-.2 140.2-.3.3-23.8L281 0H0v24m13 9v3h52.1l-.3-2.8-.3-2.7-25.8-.3L13 30v3m180 93v3h22.1l-.3-2.8-.3-2.7-10.8-.3-10.7-.3v3m41.6-2.1c-.3.3-.6 1.6-.6 2.9 0 2.3.1 2.3 11 2.3h11.1l-.3-2.8-.3-2.7-10.2-.2c-5.6 0-10.4.1-10.7.5' fill='%23d2dde6' fill-rule='evenodd'/%3E%3C/svg%3E" };

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/5548c744f8138d7e390acf42b2f60954.webp";

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "dist/assets/3f4cf22f7b47288bab7578fae9f97e49.png" , "trace": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='155' viewBox='0 0 280 155'%3E%3Cpath d='M58.2 27.9c-2.2 1.3-1 5.6 1.5 6 1.3 0 2.3-.2 2.3-.8 0-.6-.7-.8-1.5-.5-1.5.6-3.3-2.1-2.2-3.2 1.2-1.2 4.7.8 4.7 2.7 0 2.7 2 2.4 2.1-.4l.1-2.2.6 2.3c.9 3 2.4 3 3.5 0l.9-2.3.9 2.3c.9 2.3 3.9 3 4 1 0-.9.3-.8.9.2.8 1.2 1 1 1-.8 0-1.2.5-2.2 1-2.2s1 1 1.1 2.3c0 2.1.1 2.1.9-.3.7-2.2.8-2.3.9-.4 0 1.6.8 2.1 3 2.2 2.8 0 4.7-2 3.7-3.7-.9-1.3-11.6-1.2-11.6.2 0 .8-.3.9-.8 0-.9-1.3-7.2-1.5-7.2-.2 0 .5-1 0-2.2-1-1.5-1.4-2.4-1.7-2.9-1-.5.8-.8.8-1.3 0-.8-1.3-1.6-1.4-3.4-.2M18.7 43.7c-.4.3-.7 1.7-.7 3V49h35v-2.4c0-2.2-.4-2.3-8.3-3-10.7-.8-25.2-.8-26 0m36 0c-.4.4-.7 1.8-.7 3C54 49 54 49 66.5 49H79v-2.5c0-2.3-.3-2.5-5.3-2.5-2.8 0-8.1-.3-11.7-.6a19 19 0 0 0-7.3.2M80 46v3h9.5c9.3 0 9.5 0 9.5-2.4 0-2-.6-2.4-3.8-3a80 80 0 0 0-9.5-.6C80 43 80 43 80 46' fill='%23d2dde6' fill-rule='evenodd'/%3E%3C/svg%3E" };

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/9cb70b142f57159adbe6f205db6e3351.webp";

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRepoUrl = exports.getRepoUrl = function getRepoUrl(projectName) {
  return "https://github.com/rubenspgcavalcante/" + projectName;
};

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadProjects = undefined;

var _index = __webpack_require__(411);

var loadProjects = exports.loadProjects = function loadProjects() {
  return function (dispatch) {
    dispatch({ type: _index.LOAD_PROJECTS });
    new Promise(function(resolve) { resolve(__webpack_require__(431)); }).then(function (payload) {
      return dispatch({ type: _index.LOAD_PROJECTS_SUCCESS, payload: payload });
    }).catch(function (payload) {
      return dispatch({ type: _index.LOAD_PROJECTS_ERROR, payload: payload });
    });
  };
};

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = [{"title":"Leaflet Ant Path","project_name":"leaflet-ant-path","page":"https://rubenspgcavalcante.github.io/leaflet-ant-path","description":"A <a href='http://leafletjs.com/' target='_blank' rel='nofollow'>Leaflet</a> plugin, to create animated polylines, showing where's the start and end using a small dots flux similar to ants walking in a line. Also <a href='https://github.com/rubenspgcavalcante/react-leaflet-ant-path' target='_blank' rel='nofollow'>available for React</a>."},{"title":"Webpack Chrome Extension Reloader","project_name":"webpack-chrome-extension-reloader","description":"A <a href='https://webpack.js.org/' target='_blank' rel='nofollow'>Webpack</a> plugin, to help the development of Chrome extensions providing a hot-reloader server."},{"title":"Find a Bike","project_name":"findabike","page":"https://findabike.surge.sh","description":"A <a href='https://en.wikipedia.org/wiki/Progressive_web_app' target='_blank' rel='nofollow'>Progressive Web App</a> to help users of shareable bikes find bike stations based on the current location."}]

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: [] };
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions.LOAD_PROJECTS_SUCCESS:
      return _extends({}, state, { data: payload });
  }

  return state;
};

var _actions = __webpack_require__(411);

/***/ })

});
//# sourceMappingURL=projects.ae3aa34dccb9cba51ee9.chunk.js.map
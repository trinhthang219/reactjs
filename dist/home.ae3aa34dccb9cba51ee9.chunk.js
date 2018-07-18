webpackJsonp([2],{

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(413);

var _Home2 = _interopRequireDefault(_Home);

var _banners = __webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Component: _Home2.default,
  picture: _banners.BANNER_SPRING,
  title: "All about me",
  subtitle: _react2.default.createElement(
    "span",
    null,
    "$>: whoami ",
    _react2.default.createElement(
      "span",
      { className: "blink" },
      "_"
    )
  )
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

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _Profile = __webpack_require__(414);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "home", className: "m-auto row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-8" },
          _react2.default.createElement(_Profile2.default, null)
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-4" },
          _react2.default.createElement(
            "div",
            { className: "card" },
            _react2.default.createElement(
              "div",
              { className: "card-body" },
              _react2.default.createElement(
                "p",
                null,
                "I'm fascinated by the ",
                _react2.default.createElement(
                  "b",
                  null,
                  "JavaScript"
                ),
                " and ",
                _react2.default.createElement(
                  "b",
                  null,
                  "NodeJS"
                ),
                " world and everything that surrounds it. Although this is my current focus, I have good experience in other languages I've worked in past too, like ",
                _react2.default.createElement(
                  "b",
                  null,
                  "Python"
                ),
                ", ",
                _react2.default.createElement(
                  "b",
                  null,
                  "PHP"
                ),
                " and ",
                _react2.default.createElement(
                  "b",
                  null,
                  "C++"
                ),
                "."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Currently studying ",
                _react2.default.createElement(
                  "b",
                  null,
                  "Go"
                ),
                " and functional programing. As you can see I try to be dynamic as possible, an open minded person and never block myself to other technologies out of my knowledge box."
              ),
              _react2.default.createElement(
                "p",
                null,
                "So, check my ",
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: "/projects" },
                  "projects"
                ),
                " and ",
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: "/publications" },
                  "publications"
                ),
                " and see a little of my experience!"
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.PureComponent);

Home.propTypes = {};
exports.default = Home;
;

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProgressiveWebp = __webpack_require__(415);

var _ProgressiveWebp2 = _interopRequireDefault(_ProgressiveWebp);

var _image = __webpack_require__(409);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myPicImporter = (0, _image.importWithTrace)(new Promise(function(resolve) { resolve(__webpack_require__(416)); }), new Promise(function(resolve) { resolve(__webpack_require__(417)); }));

var medias = {
  'twitter': 'https://twitter.com/rubenspgc',
  'github': 'https://github.com/rubenspgcavalcante/',
  'medium': 'https://medium.com/@rubenspgcavalcante',
  'linkedin': 'https://www.linkedin.com/in/rubens-pinheiro-a34a4823/',
  'stack-overflow': 'https://stackoverflow.com/users/2346915/rubens-pinheiro'
};

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { id: "profile", className: "card " },
    _react2.default.createElement(
      "header",
      { className: "card-header" },
      _react2.default.createElement(
        "h4",
        { className: "text-center" },
        "I'm a Front end developer"
      )
    ),
    _react2.default.createElement(
      "article",
      { className: "card-body flex-md-wrap" },
      _react2.default.createElement(
        "div",
        { className: "profile-pic" },
        _react2.default.createElement(_ProgressiveWebp2.default, { alt: "my picture", importer: myPicImporter })
      ),
      _react2.default.createElement(
        "p",
        null,
        "Passionate about new technologies, active open source contributor, currently living and working in Berlin, Germany."
      ),
      _react2.default.createElement(
        "p",
        null,
        "My focus is always to build applications with high quality code, with well defined design and architecture, being capable of scale easily, don't loosing the practicality of creating new features in a fast way."
      )
    ),
    _react2.default.createElement(
      "footer",
      { className: "card-footer text-right" },
      _react2.default.createElement(
        "span",
        null,
        "Follow me",
        Object.keys(medias).map(function (key) {
          return _react2.default.createElement(
            "a",
            { href: medias[key], key: key, className: "ml-2" },
            _react2.default.createElement("i", { className: "fa fa-" + key })
          );
        })
      )
    )
  );
};

/***/ }),

/***/ 415:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var importer = _ref.importer,
      alt = _ref.alt,
      className = _ref.className;
  return _react2.default.createElement(
    _AsyncComponent2.default,
    { promise: importer },
    function (img) {
      return _react2.default.createElement(_ProgressiveImageLoader2.default, { alt: alt, className: className, image: img });
    }
  );
};

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "dist/assets/5dd1df4b79d998aa13b8814eaabb62eb.png" , "trace": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='196' height='300' viewBox='0 0 196 300'%3E%3Cpath d='M182.5 86c-.3.5-1.2.7-2 .4-.8-.4-1.5.3-1.7 1.8-.2 1.9-.9 2.3-3.6 2.3-3.3 0-3.3 0-1.3 1.6 3 2.4 2.6 3.3-.4 1.3-3.6-2.3-9.1-.8-8.8 2.4.2 1.2-.2 2.2-.8 2.2-.6 0-.9.6-.6 1.4.3.8 0 1.7-.8 2-.7.2-1.6-.2-2-1-.2-.9 0-1.2.5-.9.6.3 1 0 1-.6 0-.8-1.4-1-4.4-.7-3.9.5-4.5.3-5-1.6-.7-2-.8-2-1.8.7-1.2 3.5-5.1 3.5-5.6 0-.3-2.3-3.2-5.4-3.2-3.5 0 .7-1.4.9-3.5.5-2-.3-3.5-.2-3.4.3.5 2.7-1.3 3.8-3.7 2.5-.1 0 .2-1.8.7-3.8l.8-3.8L131 92c-1 1.3-1.6 2.7-1.2 3 1.8 1.3 1 3.2-1.7 4.1-1.6.6-3.2 1.7-3.5 2.5-.3.8-1.2 1.4-2 1.4-2.2 0-3.8 2.4-2.4 3.8 1.8 1.8-.7 3.9-6.5 5.6-2.8.8-5.3 1.3-5.6 1-.2-.2 0-.4.7-.4s1.2-.5 1.2-1.1c0-.7-.7-.8-1.8-.4a48.6 48.6 0 0 1-17.7.4c-.4-.5-1.4-.9-2.3-.9-1 0-3.5-1.2-5.6-2.6-3.6-2.5-4-2.6-8-1.3-2.2.7-4.4 1.2-4.8 1-.5 0-.8.3-.8.8s-3.3.9-7.3.8c-6.9-.2-7.3-.3-7-2.3.3-1.2 0-2.5-.6-2.8-.6-.4-1.1 0-1.1.8 0 1.4-.3 1.4-2 .4-3-2-4.5.3-2 3 2.7 2.8 2.5 3.7-.9 5.2-4.2 1.7-12.1.4-12.1-2 0-1-.4-2.1-.9-2.4-1-.7-2.3 2.2-1.5 3.5.3.5-.9.9-2.6.9-2 0-2.9-.4-2.4-1.1.4-.7-.4-2-1.7-3.1-1.3-1.1-1.8-1.7-1.1-1.3.6.3 1.2.1 1.2-.4 0-1.8-2.6-1.3-4.4.8a9.9 9.9 0 0 1-4.7 2.6c-1.6.4-2.9 1.1-2.9 1.7 0 .6-.3.8-.7.5-.3-.4-1.2-.2-1.9.3-.8.8-1.6.6-2.7-.5-1.1-1-1.8-1.2-2.3-.4-.4.7 0 1.6 1 2 2.5 1.5 2 2.6-1.8 3.3-3.2.6-3.4.9-3.1 4.2.2 2.5-.3 4.2-1.6 5.5-2.3 2.3-2.5 4-.4 3.3 2-.8 2 1 0 2.6-1.3 1-1.3 1.4 0 2.7 1.3 1.3 1.3 1.7 0 3.6A7.5 7.5 0 0 0 .1 144c0 1 .2 1.1.6.2.2-.6.9-1 1.4-.6.5.3.9 0 .9-.5 0-1.5 2.7-1.4 2.7.2 0 .6.4 2.4.8 4 .5 1.8.3 2.7-.5 2.7-.7 0-1-.6-.7-1.4.3-.8-.2-1.6-1.3-1.9-1-.3-2 0-2.3.8-.6 1.4.7 3.7 1.9 3.5 1.9-.3 1.3 1.7-1 4C0 157.3 0 157.8 0 170.2c0 8.4.4 12.7 1 12.3.6-.3 1 .3 1 1.3 0 1.3.9 2.2 2.5 2.6 1.4.4 2.5 1.4 2.5 2.2 0 1.5.2 1.5 2.4 0 2.3-1.5 2.5-1.5 2.3.4-.1 2.2-4.8 3.6-9.2 2.8-2.4-.5-2.5-.4-2.5 5.2v5.7l8.1.8c9.8.8 10.9 1.2 10.9 3.6 0 1.6.8 1.9 5 1.9 3.2 0 4.9-.4 4.5-1-.3-.6 0-1.7 1-2.6 1.4-1.4 1.5-1.3 1.5 1s.4 2.5 3 2.2c2-.2 3 .1 3 1a2 2 0 0 0 1.3 1.7c1 .4 1 .6 0 .6-2 .1-1.5 2.1.5 2.1 1.5 0 1.9-.8 2-4.3 0-2.3-.4-6-1-8.2-.6-2.2-1-5-1-6.3 0-1.2-.4-2.2-1-2.2-.4 0-.8-.7-.8-1.5s.7-1.5 1.5-1.5c2 0 2-4.3.1-6-1.6-1.3-1.2-3.6 1.3-6.8l1.7-2.4 1.8 2.7c1.1 1.7 1.5 3.5 1.1 4.9l-1.1 4.8-.5 2.8h12.3c8.1 0 12.8-.4 13.6-1.2.9-.9 1.3-.7 1.8.5.5 1.4 2.2 1.7 10.5 1.7H91v-3.3c0-1.7-.7-5.7-1.5-8.6-1-3.9-1.2-6.7-.5-9.4 1.6-7.2 6-7.6 7.6-.7.6 2.5 1.7 4.6 2.6 4.8 2 .4 4.8-9.9 5.8-22.3 1-12 1.1-12.4 6.7-19.8 4.9-6.3 8-7.3 12.8-4 1.5.9 2.5 1 2.5.4 0-.7.8-.8 2.6 0 1.4.5 3 .7 3.5.3.5-.3.9 0 .9.6 0 .7.6.8 1.6.2 1-.5 2.5-.7 3.6-.4 1 .2 2.8-.4 3.8-1.3 2.4-2.2 2.6-3.5.5-3.5-2.9 0-1.5-2 2-2.9 2.5-.7 4.5-.6 6.3 0a28 28 0 0 0 8.4 1.4c3.1 0 6.4.8 7.4 1.5.9.8 3.5 5 5.7 9.5l4 8 .8 17.5c.4 9.6 1 18.9 1.4 20.6.5 2.2.2 3.5-1 4.7-.8.8-1.5 2.3-1.5 3.1 0 .9-.7 1.6-1.6 1.6-1.1 0-1.4.6-1 1.8.5 1.5.5 1.5-.7 0-.9-1.1-1.5-1.2-2.3-.4-1.5 1.6-.6 3.6 1.3 2.9 1.1-.4 1.4-.3.9.6-.5.7-1.4 1-2.2.7-1.7-.7-4.6.3-4 1.4.3.4-.6.8-2 .8-1.3 0-2.4-.4-2.4-.9 0-.8-3-4.4-10.4-12.2-3.7-4-3.8-4.1-1.7-5 1.4-.7 2.5-.7 3.2 0 .5.5 2.3.7 4 .5 2.7-.4 2.8-.5 1.2-1.9-1-.8-1.2-1.2-.5-.8 2 1 12-1.6 11.8-3-.3-2.4-3.7-5.4-7.3-6.6-2.2-.7-3.1-1.5-2.6-2 1.4-1.4 6 .6 7.5 3 2.7 4.4 8 1.3 6.4-3.7-1.7-5.2-17-9.7-24.6-7.2-2.2.7-3.9 1.8-3.7 2.4.2.6-.2 2.1-.9 3.4a11 11 0 0 0-.8 5.5c.3 1.8.4 5.1.4 7.5 0 3 .4 4.4 1.5 4.8.8.3 1.5 1.4 1.5 2.4s.4 2.1 1 2.4c1.8 1.2-.2 4.6-2.9 4.7-8.6.5-20.1-1.4-20.1-3.2 0-.5 1.3-2 3-3.5 1.6-1.5 2.7-3 2.4-3.6-.3-.4-1-.6-1.5-.3-.5.4-.9.3-.9-.2a24 24 0 0 1 7.1-6.3c2 0 3.3-8.3 1.9-12v-2.5c.2-1.6 0-1.7-1.4-.6s-1.6 1.1-1.6-.2c0-2.4-3.6-3.9-10.6-4.4-12-.9-16.6 2.4-16 11.7.2 4.6.6 5.5 2.7 6.3a32.6 32.6 0 0 1 10.9 6c0 .4.5.5 1 .2a2 2 0 0 1 2 0c1.2.7.1 3.5-1.4 3.5-.6 0-2.3 1.1-3.8 2.5s-3.1 2.6-3.5 2.6c-4.2.6-8 4-9.7 8.5-1 2.8-1.5 3.3-1.5 1.7-.1-2.7-2-4-2.7-1.9-.7 2-3 2.1-3.7.3-.3-.6-.6-.1-.6 1.2 0 1.7.3 2.2 1.4 1.7 1-.3 1.7.3 2.1 2 .7 2.9-.3 4.5-1.5 2.5-.6-1-1-.4-1.6 2-.6 2.5-.3 3.6 1.2 4.8 2.2 1.8 4.6 6.8 3.8 8-.3.5.2 1.1 1 1.5.8.3 1.5 1.2 1.5 2a19 19 0 0 0 3.5 6c2 2.6 3.5 5 3.5 5.6 0 .6.5 1 1.2 1 .6 0 .9.2.6.5-.3.3 1 2.1 2.8 4 3.4 3.6 4.2 5.5 2.5 5.5-.5 0-1.3-.9-1.6-2-.3-1.1-1-2-1.5-2s-.4 1.3.1 3c1 2.5 1.4 2.8 3.4 2 2-.8 2.2-.6 1.8 1.3-.3 1.6-.2 1.8.5.8s1.3-.5 2.2 2.3c.6 2 1.8 3.6 2.5 3.6.8 0 1.8.7 2.3 1.6.8 1.4 1.2 1.4 4.6 0 2-.9 4-1.5 4.4-1.4 1.4.4 11.4-3.5 10.6-4a4 4 0 0 1-1.2-2.2c-.3-1.2 0-1.3 1-.3.6.7 2.4 1.3 4 1.3 2.1 0 2.6-.4 2.1-1.6-.5-1.3-.2-1.5 1.6-1 1.6.6 2.3.2 3-1.6.5-1.5.5-2.6-.3-3.1-.6-.5-.2-.6 1-.2 1.6.4 3-.2 5-2 1.4-1.3 3-2.2 3.5-2 .5.4.9 0 .9-1 0-.8.4-1.5.9-1.5.4 0 1.1-2.8 1.5-6.3a68 68 0 0 1 3.6-16.4c.7-3 2-4.7 3.8-5.7 1.5-.9 2.1-1.5 1.4-1.6-1.7 0-.5-7 1.5-8.7 1.3-1 1.3-2 .4-6.4-.9-4-.9-5.4 0-6 .7-.4 1-1.4.6-2.2-.6-1.6 4-6.7 6-6.7 1.7 0 3.3 3.4 3.3 7 0 1.6-1 5.3-2.4 8.2a53.3 53.3 0 0 0-6.6 21c0 4.1-.3 4.8-2 4.8-2.1 0-2.9 3-.8 3 .7 0 .5.5-.4 1-1 .6-1.8 1.8-1.8 2.6 0 1.1 1.7 1.4 8.5 1.4 5 0 8.5-.4 8.5-1s-.7-1-1.4-1c-.8 0-2-.8-2.5-1.8-.8-1.3-1.2-1.4-2.2-.5-1.7 1.7-4-.9-4.5-5.2-.3-2.6 0-3.5 1-3.5s1.6.4 1.6 1 .7 1 1.6 1c1 0 1.4.6 1 1.5-.3.8 0 1.7.4 2 .6.4 1-.4 1-1.5 0-1.3.8-2.4 2-2.7 3-.8 2.6-4.3-.5-4.3-3.5 0-3.3-2.8.3-3.2l2.7-.3-.2-37.5c-.2-60.3-.3-63.4-1.2-65-.8-1-1.3-1.1-2.4-.2-1.2 1-1.6.9-2-.8-.3-1.3-.1-2 .6-1.7 1.2.4 4.7-2.8 4.7-4.3 0-.7-.6-.7-2 0-1 .5-2.7 1-3.6 1-1 0-2.5.7-3.5 1.6-1.6 1.4-1.9 1.4-3.5-1-1.5-2.3-1.5-3-.3-5.4l1.7-3.5c.5-1-1.6-.9-2.3.3M61.7 91.5c-1 .8-1.6 1.8-1.2 2.4.3.6.2 1.1-.4 1.1-.5 0-1.4-.7-2-1.7-.8-1.5-1-1.4-3.2.6L52.5 96l2.3.6c2.4.6 2.6 1.1 1.3 3.2-.5.8-1.4 1-2.2.5-1.2-.6-1.2-.5-.1.8 1.4 1.8 6.2 3 6.2 1.6 0-1 8-.4 13 1.1 4.7 1.5 5.3 1.4 4.5-.7l-1-3.2c-.1-1-1.1-1.4-3.5-1.2-2.9.3-3.2.1-2.7-1.7.3-1.4 0-2.1-.9-2.1-.8 0-1.4-.7-1.4-1.6 0-1.1-.6-1.5-2-1.1-1 .3-2 0-2.2-.8-.2-1.1-.6-1.1-2.1 0M50 199.9c0 2.2-2.8 3.5-5.4 2.5-1.3-.5-1.6.1-1.6 4 0 4.4.1 4.6 3 4.6 1.6 0 3 .4 3 1s-1.4 1-3 1-3 .4-3 1 2.8 1 6.5 1H56l-.4-3.4c-.2-1.9-1-4.3-1.5-5.5-1.4-2.6-1.5-2.6 3.8 0 2.4 1.1 4.5 1.8 4.7 1.6.3-.3.6-2.4.7-4.8.2-3.9 0-4.4-2-4.7-1.3-.2-2.3.1-2.3.7s-1.4 1-3 .9c-1.6-.1-3-.6-3-1s-.7-.8-1.5-.8-1.5.9-1.5 2m19 14.9c0 .7.5 2.2 1.1 3.4 1 1.8.6 1.7-1.5-.6a16 16 0 0 0-3.1-2.7c-.2 0-.2 2 0 4.6.3 3 .1 4.3-.6 3.9-.6-.4-.8-1.3-.5-2 .5-1.4-2.7-4.9-3.7-3.9-.3.3-.3 1.3 0 2.2.4 1 .2 1.3-.5.8-1.9-1.1-1.4.5.5 2 1.6 1.2 1.6 1.3.2 1.4-1 0-2-.7-2.3-1.6-.4-1-1.3-1.3-2.6-.9-1.1.3-2 .2-2-.3s-.9-1.2-2-1.5c-1.1-.3-2-.1-2 .4s.7.9 1.5.9 1.5.4 1.5.8c0 .5-1.4.9-3 .9-2 0-2.6-.3-1.8-.9.7-.4.8-.8.3-.8a6 6 0 0 0-2.5 1c-1.2.8-1.2 1 .3 1.6 1 .3 1.4 1 1.1 1.5-.7 1.2.3 1.1 2.7-.2 2.6-1.3 4.9.4 4.9 3.7 0 1.3.6 2.4 1.3 2.4 2.4 0 3.8 2.2 2.4 3.8-1 1.3-.7 1.4 2.3.8 5-1.2 17-1.5 17.6-.5.2.4 1.1.6 2 .2.9-.3 1.4.1 1.5 1.3 0 1.1.3 1.4.6.6.2-.6.9-1 1.4-.6.5.3.9 0 .9-.5 0-.6.9-1.1 2-1.1s2 .5 2 1c0 .7.6.7 2 0 1.3-.7 2-.7 2 0 0 .6.9.6 2.5 0s2.5-.6 2.5 0c0 .7.8.7 2 0s2.4-.9 2.8-.6c.9 1-2.7 3.2-8.2 5-2.8 1-7.5 3-10.5 4.5-4 1.9-5.6 2.2-5.9 1.3-.2-.6-.8-1.2-1.3-1.2-.4 0-.6.7-.3 1.5.4.8 0 1.5-.6 1.5-1.6 0-4-2.6-3.2-3.5.4-.5.1-.5-.6-.1-.8.5-1 1.3-.2 2.5.7 1.5.4 2-1.6 3a13 13 0 0 1-4.2 1.1c-1 0-3.4 1-5.5 2-5.5 3-12.7 5.2-14.3 4.6-.8-.3-1.3-.2-1 .3.7 1.1-4.1 2.4-5.6 1.5-.6-.4-.8-.3-.5.3.7 1-3.3 4.3-5.2 4.3-.5 0-3 2.1-5.6 4.8-2.6 2.6-4.4 4.1-4 3.4.8-1.5 0-1.5-2.6-.2-2.2 1.2-2.4.7-.8-2.2.9-1.6.8-2-.3-1.6-.7.3-1.3 1.8-1.3 3.4 0 4.1-1.7 4.8-3.2 1.3l-1.3-3-2.7 2.1-2.8 2.2-.3-4.3c-.3-4.4 1-6.2 3.8-5.6 1 .3 1.7-.3 1.7-1.4.2-1.9-1.7-2.6-3-1.2a6 6 0 0 1-2.7 1c-1.4.2-2-.3-2-1.6 0-1.1-.5-2.3-1-2.6-.5-.3-1 .1-1 1 0 1.1-.5 1.5-1.5 1.1-.8-.3-1.4 0-1.2.7 0 .7-.3 1.1-1 1C.4 262 .1 267 0 281v19l98.2-.2 98.3-.3v-27.2c0-15-.2-27-.3-26.8-.2.2-3.1-1-6.5-2.6s-6.7-2.9-7.3-2.9c-.7 0-2-1.1-2.8-2.5-1.9-2.8-3.6-3.3-3.6-1a57 57 0 0 1-10.8 15.2 34.3 34.3 0 0 1-24.4 8.7c-9.2-.8-10.9-1-11.9-2.1-1.2-1.2-4.9-.5-4.9 1 0 .5-1.1.7-2.5.5-1.3-.3-2.2-.1-2 .3.8 1.2.3 1.1-4-.7-2.2-.9-4.8-1.8-6-2-5.6-1-10-10.9-7.5-16.8 2.3-5.6 2.4-10.3.2-13-1-1.4-2.2-2.3-2.5-2-.4.4-1-.5-1.6-2-1-2.4-2.3-3.6-2-1.8.4 2.2-.2 4.2-1.1 3.7-.6-.4-1-1.3-.8-2.2.2-.8-.7-2.2-2-3-2-1.4-2.2-1.4-2.2.1 0 1 .4 1.5.9 1.2.5-.3 1.1 0 1.5 1 1 2.4-2.2 1.6-4-1.1-1.1-1.7-2-2.2-2.8-1.6-.7.6-1.7.6-2.6 0-3.6-2.2-2.9-.6 1 2.5 2.4 2 4.7 3.3 5.1 3 .4-.2 1 0 1.3.5 1.3 2-2.4 1.8-4.4-.4-2-2.1-7-4-6.8-2.6.2 2-.3 3.1-1.2 2.6-.6-.4-.8-1-.6-1.3.2-.4-.3-1.6-1-2.7-1.6-2-1.6-2-1 .5.7 2.4.6 2.4-.9.5-1.9-2.3-1.4-4.1 1-3.7 1 .2 1.4 0 1-.8-.4-.6-1.2-1-1.8-.7-.7.3-2.2-.5-3.5-1.6-1.3-1.2-2.2-1.6-2.2-.8m-40 22.8c0 .6.4 1.5 1 1.8.6.3 1 1.4 1 2.3-.1 1.2-.3 1.3-.7.4-.4-1-1.1-.5-2.4 1.4-1.6 2.6-1.9 2.6-2.5 1-.5-1.2-.3-2.1.4-2.4 1.7-.5 1.5-3.2-.3-3.2-.8 0-1.5.8-1.5 1.8 0 2.9-1.2 3.4-3.3 1.5-1.7-1.6-1.7-1.4.3 2 1.2 2 2.6 3.7 3.1 3.7s1 1.5 1 3.3c0 2.7.2 3 1.2 1.7 1.8-2.4 5-1.4 4.1 1.3-1 3.2-3.7 5-4.7 3.1-.5-.8-1.2-1.2-1.8-.9-.5.4-1.4-.6-2-2.1-.7-2-.7-3 .3-3.6.7-.4.8-.8.3-.8-.6 0-1.9-1.4-2.9-3-1-1.7-2.2-2.8-2.7-2.5-.5.4-.9.1-.9-.5s-.5-.8-1-.5c-1 .6.7 3 2.3 3.3 1.7.2 3.4 3.5 3 5.7-.3 1.3 0 2.6.6 3 .6.3 1.1 1 1.1 1.6 0 .6-.4.7-1 .4-.6-.4-1 .7-1 2.7v3.3l-2.2-3.4c-1.7-2.7-2-3.7-1-5.1 1-1.6.8-1.8-.7-1.7-1.3 0-1.7.9-1.6 3 .1 1.6.6 3.2 1.1 3.5.5.4.9 1.7.8 3 0 1.3.4 2.2 1.2 2.2.8 0 1.4.6 1.4 1.3 0 .8.4.7 1.3-.3.7-.8 1.9-1.5 2.7-1.5.8 0 1.4-.6 1.2-1.4-.3-1.5 1.5-3 3.7-3 1-.1 1 .2.2 1.3-.8 1-.9 1.6-.1 2 .5.4 1 .3 1-.3s1.6-1.3 3.5-1.7c3.3-.6 5-2.4 2.2-2.4-1 0-1.3-1.3-1.2-4 .1-3.4-.2-4.3-1.9-5-1.7-.6-1.4-1 2.5-3 3-1.4 4.5-2.8 4.6-4.2.2-1.5-.1-1.8-.9-1-1.3 1.3-3.8-.8-3.8-3.2 0-1.9-1.6-2.1-2.3-.3-.4.9-.8.8-1.6-.3-.7-1-1-1-1-.3' fill='%23d2dde6' fill-rule='evenodd'/%3E%3C/svg%3E" };

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/7c5d4b266ad1eec8f683989401ab3816.webp";

/***/ })

});
//# sourceMappingURL=home.ae3aa34dccb9cba51ee9.chunk.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-estate-plan-estate-plan-module"],{

/***/ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/drag-drop.es5.js ***!
  \*********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = (/** @type {?} */ (source[key]));
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) { return prop === 'transform' || prop === 'all'; }));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    function (part) { return part.trim(); }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                /** @type {?} */
                var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    /** @type {?} */
                    var isDelayElapsed = Date.now() >= _this._dragStartTime + (_this.dragStartDelay || 0);
                    if (!isDelayElapsed) {
                        _this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                        _this._hasStartedDragging = true;
                        _this._ngZone.run((/**
                         * @return {?}
                         */
                        function () { return _this._startDragSequence(event); }));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                _this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEvents.observers.length) {
                _this._ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        distance: _this._getDragDistance(constrainedPointerPosition),
                        delta: _this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._endDragSequence(event);
        });
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); }));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return toggleNativeDragInteractions(handle, false); }));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        var _this = this;
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        (/** @type {?} */ (this))._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            (/** @type {?} */ (this))._resizeSubscription = (/** @type {?} */ (this))._viewportRuler
                .change(10)
                .subscribe((/**
             * @return {?}
             */
            function () { return (/** @type {?} */ (_this))._containInsideBoundaryOnResize(); }));
        }
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    DragRef.prototype.getFreeDragPosition = /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    };
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    DragRef.prototype.setFreeDragPosition = /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    };
    /** Updates the item's sort order based on the last-known pointer position. */
    /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    DragRef.prototype._sortFromLastPointerPosition = /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(position);
        }
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    DragRef.prototype._endDragSequence = /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            function () {
                _this._cleanupDragArtifacts(event);
                _this._cleanupCachedDimensions();
                _this._dragDropRegistry.stopDragging(_this);
            }));
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.ended.next({
                    source: _this,
                    distance: _this._getDragDistance(_this._getPointerPositionOnPage(event))
                });
            }));
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        var _this = this;
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._scrollPosition = _this._viewportRuler.getViewportScrollPosition();
        }));
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            /** @type {?} */
            var pointerPosition = _this._getPointerPositionOnPage(event);
            /** @type {?} */
            var distance = _this._getDragDistance(_this._getPointerPositionOnPage(event));
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            _this.ended.next({ source: _this, distance: distance });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer, distance);
            _this._dropContainer = _this._initialContainer;
        }));
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
                _this.entered.next({
                    item: _this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(_this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._startScrollingIfNecessary(x, y);
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            }));
        }));
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    DragRef.prototype._applyRootElementTransform = /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    };
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    DragRef.prototype._getDragDistance = /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    function (currentPosition) {
        /** @type {?} */
        var pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    };
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    DragRef.prototype._cleanupCachedDimensions = /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    function () {
        this._boundaryRect = this._previewRect = undefined;
    };
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    DragRef.prototype._containInsideBoundaryOnResize = /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    function () {
        var _a = this._passiveTransform, x = _a.x, y = _a.y;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        /** @type {?} */
        var boundaryRect = this._boundaryElement.getBoundingClientRect();
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var leftOverflow = boundaryRect.left - elementRect.left;
        /** @type {?} */
        var rightOverflow = elementRect.right - boundaryRect.right;
        /** @type {?} */
        var topOverflow = boundaryRect.top - elementRect.top;
        /** @type {?} */
        var bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y: y, x: x });
        }
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    var descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    var descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');
        for (var i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            var correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
    /** @type {?} */
    var rootNode = viewRef.rootNodes[0];
    if (rootNode.nodeType !== _document.ELEMENT_NODE) {
        /** @type {?} */
        var wrapper = _document.createElement('div');
        wrapper.appendChild(rootNode);
        return wrapper;
    }
    return (/** @type {?} */ (rootNode));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
var AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this = this;
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the container's scroll position.
         */
        this._scrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the scroll position of the viewport.
         */
        this._viewportScrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */
        this._verticalScrollDirection = 0 /* NONE */;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */
        this._horizontalScrollDirection = 0 /* NONE */;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Handles the container being scrolled. Has to be an arrow function to preserve the context.
         */
        this._handleScroll = (/**
         * @return {?}
         */
        function () {
            if (!_this.isDragging()) {
                return;
            }
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(_this.element);
            _this._updateAfterScroll(_this._scrollPosition, element.scrollTop, element.scrollLeft);
        });
        /**
         * Starts the interval that'll auto-scroll the element.
         */
        this._startScrollInterval = (/**
         * @return {?}
         */
        function () {
            _this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._stopScrollTimers))
                .subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var node = _this._scrollNode;
                if (_this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (_this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (_this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            }));
        });
        /** @type {?} */
        var nativeNode = this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(element);
        this._shadowRoot = getShadowRoot(nativeNode) || _document;
        _dragDropRegistry.registerDropContainer(this);
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._removeListeners();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = (/** @type {?} */ (null));
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this.beforeStarted.next();
        this._isDragging = true;
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._startReceiving(_this); }));
        this._removeListeners();
        // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.
        if (this._ngZone) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return element.addEventListener('scroll', _this._handleScroll); }));
        }
        else {
            element.addEventListener('scroll', this._handleScroll);
        }
        // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.
        if (this._viewportRuler) {
            this._listenToScrollEvents();
        }
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        var newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
        if (newIndex === -1) {
            // We use the coordinates of where the item entered the drop
            // zone to figure out at which index it should be inserted.
            newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        }
        /** @type {?} */
        var activeDraggables = this._activeDraggables;
        /** @type {?} */
        var currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        /** @type {?} */
        var newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
        this.entered.next({ item: item, container: this, currentIndex: this.getItemIndex(item) });
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @breaking-change 9.0.0 `distance` parameter to become required.
     */
    /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer, distance) {
        if (distance === void 0) { distance = { x: 0, y: 0 }; }
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._withDropContainer((/** @type {?} */ (_this))); }));
        if ((/** @type {?} */ (this)).isDragging()) {
            (/** @type {?} */ (this))._cacheItems();
        }
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        function (currentItem) { return currentItem.drag === item; }));
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    };
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    DropListRef.prototype._startScrollingIfNecessary = /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a;
        if (this.autoScrollDisabled) {
            return;
        }
        /** @type {?} */
        var scrollNode;
        /** @type {?} */
        var verticalScrollDirection = 0 /* NONE */;
        /** @type {?} */
        var horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling the container.
        if (this._isPointerNearDropContainer(pointerX, pointerY)) {
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
            _a = getElementScrollDirections(element, this._clientRect, pointerX, pointerY), verticalScrollDirection = _a[0], horizontalScrollDirection = _a[1];
            if (verticalScrollDirection || horizontalScrollDirection) {
                scrollNode = element;
            }
        }
        // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
        // Otherwise check if we can start scrolling the viewport.
        if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
            var _b = this._viewportRuler.getViewportSize(), width = _b.width, height = _b.height;
            /** @type {?} */
            var clientRect = { width: width, height: height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
                if (this._ngZone) {
                    this._ngZone.runOutsideAngular(this._startScrollInterval);
                }
                else {
                    this._startScrollInterval();
                }
            }
            else {
                this._stopScrolling();
            }
        }
    };
    /** Stops any currently-running auto-scroll sequences. */
    /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    DropListRef.prototype._stopScrolling = /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    function () {
        this._stopScrollTimers.next();
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this._clientRect = getMutableClientRect(element);
        this._scrollPosition = { top: element.scrollTop, left: element.scrollLeft };
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            return { drag: drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.getRootElement().style.transform = ''; }));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._stopReceiving(_this); }));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._removeListeners();
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        }));
    };
    /** Caches the current items in the list and their positions. */
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItems = /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    function () {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheOwnPosition();
    };
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @param scrollPosition Object that is keeping track of the scroll position.
     * @param newTop New top scroll position.
     * @param newLeft New left scroll position.
     * @param extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     */
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    DropListRef.prototype._updateAfterScroll = /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    function (scrollPosition, newTop, newLeft, extraClientRect) {
        var _this = this;
        /** @type {?} */
        var topDifference = scrollPosition.top - newTop;
        /** @type {?} */
        var leftDifference = scrollPosition.left - newLeft;
        if (extraClientRect) {
            adjustClientRect(extraClientRect, topDifference, leftDifference);
        }
        // Since we know the amount that the user has scrolled we can shift all of the client rectangles
        // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
        // behavior where we might be measuring the element before its position has changed.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var clientRect = _a.clientRect;
            adjustClientRect(clientRect, topDifference, leftDifference);
        }));
        // We need two loops for this, because we want all of the cached
        // positions to be up-to-date before we re-sort the item.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var drag = _a.drag;
            if (_this._dragDropRegistry.isDragging(drag)) {
                // We need to re-sort the item manually, because the pointer move
                // events won't be dispatched while the user is scrolling.
                drag._sortFromLastPointerPosition();
            }
        }));
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
    };
    /** Removes the event listeners associated with this drop list. */
    /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._removeListeners = /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    function () {
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).removeEventListener('scroll', this._handleScroll);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        function (sibling) { return sibling._canReceive(item, x, y); }));
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = (/** @type {?} */ (this._shadowRoot.elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
            this._listenToScrollEvents();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    };
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._listenToScrollEvents = /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._viewportScrollPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.isDragging()) {
                /** @type {?} */
                var newPosition = (/** @type {?} */ (_this._viewportRuler)).getViewportScrollPosition();
                _this._updateAfterScroll(_this._viewportScrollPosition, newPosition.top, newPosition.left, _this._clientRect);
            }
            else if (_this.isReceiving()) {
                _this._cacheOwnPosition();
            }
        }));
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
    /** @type {?} */
    var clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    var top = clientRect.top, bottom = clientRect.bottom, height = clientRect.height;
    /** @type {?} */
    var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    var left = clientRect.left, right = clientRect.right, width = clientRect.width;
    /** @type {?} */
    var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    /** @type {?} */
    var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    /** @type {?} */
    var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    /** @type {?} */
    var verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    var horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * Gets the shadow root of an element, if any.
 * @param {?} element
 * @return {?}
 */
function getShadowRoot(element) {
    if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["_supportsShadowDom"])()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null;
        if (rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); }),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); }),
                options: true
            })
                .set('scroll', {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.scroll.next(e); }),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return instance.id === id; }));
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDragItem(instance); }));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.removeDropContainer(instance); }));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    };
    DragDrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }); }))).subscribe(observer);
            return (/**
             * @return {?}
             */
            function () {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "boundaryElementSelector", {
        /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * @breaking-change 9.0.0
         */
        get: /**
         * Selector that will be used to determine the element to which the draggable's position will
         * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
         * element has been found
         * @deprecated Use `boundaryElement` instead.
         * \@breaking-change 9.0.0
         * @return {?}
         */
        function () {
            return typeof this.boundaryElement === 'string' ? this.boundaryElement : (/** @type {?} */ (undefined));
        },
        set: /**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            this.boundaryElement = selector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    CdkDrag.prototype.getFreeDragPosition = /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    function () {
        return this._dragRef.getFreeDragPosition();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle._parentDrag === _this; }))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                function (handle) { return handle.element; }));
                _this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item._stateChanges; })));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (_this.freeDragPosition) {
                _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        var positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElement` value. */
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(_this.dragStartDelay);
                ref.constrainPosition = _this.constrainPosition;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    };
    /** Handles the events from the underlying `DragRef`. */
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._handleEvents = /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe((/**
         * @return {?}
         */
        function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        function () {
            _this.released.emit({ source: _this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.ended.emit({ source: _this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this,
                distance: event.distance
            });
        }));
    };
    CdkDrag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-disabled]': 'disabled',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPreview, { static: false },] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPlaceholder, { static: false },] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragBoundary',] }],
        dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragStartDelay',] }],
        freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragFreeDragPosition',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragDisabled',] }],
        constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragConstrainPosition',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        this._sortingDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        function () { return true; });
        /**
         * Whether to auto-scroll the view when the user moves their pointer close to the edges.
         */
        this.autoScrollDisabled = false;
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        });
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDropList.prototype, "sortingDisabled", {
        /** Whether sorting within this drop list is disabled. */
        get: /**
         * Whether sorting within this drop list is disabled.
         * @return {?}
         */
        function () { return this._sortingDisabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this._dropListRef.withItems(items.map((/**
             * @param {?} drag
             * @return {?}
             */
            function (drag) { return drag._dragRef; })));
        }));
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return ref.withDirection(value); }));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    function (list) { return list.id === drop; })))) : drop;
            }));
            if (_this._group) {
                _this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            ref.disabled = _this.disabled;
            ref.lockAxis = _this.lockAxis;
            ref.sortingDisabled = _this.sortingDisabled;
            ref.autoScrollDisabled = _this.autoScrollDisabled;
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            function (drop) { return drop && drop !== _this; })).map((/**
             * @param {?} list
             * @return {?}
             */
            function (list) { return list._dropListRef; })))
                .withOrientation(_this.orientation);
        }));
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        function () {
            _this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
            _this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        }));
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-disabled]': 'disabled',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return CdkDrag; })), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListDisabled',] }],
        sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListSortingDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListEnterPredicate',] }],
        autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/components/accounts-list/accounts-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/components/accounts-list/accounts-list.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(accounts$ | async); else AccountsSideEffects\">\n  <ng-container *ngIf=\"!accounts.isEmpty(); else EmptyState\">\n    <form [formGroup]=\"accountForm\">\n      <ul class=\"flx flx-col list\">\n        <li class=\"flx-l-c list__item\" *ngFor=\"let account of accountControls.controls; let i = index\">\n          <label class=\"flx input__label\" [for]=\"accounts.getAccounts()[i].asset_unique_id\">\n            <input \n              type=\"checkbox\" \n              [id]=\"accounts.getAccounts()[i].asset_unique_id\" \n              class=\"clr-checkbox\" \n              [formControl]=\"account\"\n              (change)=\"onCheckboxChanges($event, accounts.getAccounts()[i])\" />\n            <span class=\"clr-checkbox__box\"></span>\n          </label>\n          <div style=\"margin: 0 0 0 20px;\">\n            <div class=\"flx\">\n              <!-- <p style=\"margin: 0;\">Name: </p> -->\n              <p style=\"margin: 0 0 0 10px;\">{{ accounts.getAccounts()[i].asset_title }}</p>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </form>\n  </ng-container>\n  <ng-template #EmptyState>\n    <p class=\"empty-state\">No Accounts to add</p>\n  </ng-template>\n</ng-container>\n<ng-template #AccountsSideEffects>\n  <clr-loading></clr-loading>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"flx-b-c header\">\n  <button \n    type=\"button\" \n    class=\"clr-btn-border\" \n    (click)=\"backToList()\">Back</button>\n  <ng-content select=\"[title]\"></ng-content>\n  <ng-content select=\"[header]\"></ng-content>\n</header>\n\n<div class=\"flx-b-s main__inner\">\n  <div class=\"clr-block flx flx-col left-side\">\n    <ng-content select=\"[leftSide]\"></ng-content>\n  </div>\n\n  <div class=\"clr-block flx flx-col right-side\">\n    <ng-content select=\"[rightSide]\"></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"lock\" [config]=\"{animationType:'three-bounce'}\"></ngx-loading>\n<single-page-layout>\n\n  <div title class=\"flx flx-col-c title-wrap\">\n    <h1 class=\"title-h1\">Assign Beneficiaries</h1>\n    <h4 class=\"title-h4\">Assigning Beneficiaries to multiple Accounts will override the previous allocations</h4>\n  </div>\n\n  <button \n    header \n    type=\"button\" \n    class=\"clr-btn\"\n    [disabled]=\"accounts.isCheckedEmpty() || beneficiaries.isEmpty()\"\n    (click)=\"assignBeneficiaries()\">Assign</button>\n    \n  <div leftSide>\n    <h2 class=\"title-h2\">Accounts</h2>\n    <label leftSide class=\"flx input__label input__label--check-all\" for=\"chooseAllAccounts\">\n      <input \n        type=\"checkbox\" \n        id=\"chooseAllAccounts\" \n        class=\"clr-checkbox\"\n        [disabled]=\"accounts && accounts.isEmpty()\"\n        (change)=\"chooseAllEvent = $event\" />\n      <span class=\"clr-checkbox__box\"></span>\n      <span class=\"clr-checkbox__label\">Choose All</span>\n    </label>\n    <accounts-list \n      isAll='true'\n      [onChooseAllEvent]=\"chooseAllEvent\" (onChooseAll)=\"onChooseAll($event)\"></accounts-list>\n  </div>\n  <app-beneficiaries-block \n    accountId=\"-1\"\n    rightSide></app-beneficiaries-block>\n</single-page-layout>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"lock\" [config]=\"{animationType:'three-bounce'}\"></ngx-loading>\n<section class=\"estate-plan\">\n  <h2 class=\"title-h1 title-h1--style\">Estate Plan for Digital Assets</h2>\n\n  <div class=\"flx-b-t mobile\">\n    <aside class=\"clr-block profile\">\n      <user-profile-block></user-profile-block>\n    </aside>\n\n    <div class=\"clr-block assets\">\n      \n        <header class=\"flx-b-t header\">\n          <div class=\"flx flx-col\">\n            <p class=\"header__status\">Estate Plan Status: \n              <span \n                *ngIf=\"estatePlan.getEstatePlanData().isComplete !== null\"\n                class=\"header__status--style\" \n                [ngClass]=\"{'incomplete': !estatePlan.getEstatePlanData().isComplete}\">\n                  {{  estatePlan.getEstatePlanData().isComplete ? 'COMPLETE' : 'INCOMPLETE' }}\n              </span>\n            </p>\n            <p class=\"header__message\">Every Account needs to have at least one Beneficiary.</p>\n          </div>\n\n          <p \n            class=\"header__update-date\" \n            *ngIf=\"estatePlan.getEstatePlanData().lastUpdate !== null\">Last Update: <span>{{ estatePlan.getEstatePlanData().lastUpdate | date:'MMM d, y' }}</span></p>\n\n          <ul class=\"flx-c-c controls\">\n            <li class=\"controls__item\">\n              <button type=\"button\" class=\"clr-btn--line\" (click)=\"newAsset()\">New Account</button>\n            </li>\n            <li class=\"controls__item\">\n              <button type=\"button\" class=\"clr-btn--line\" (click)=\"addAccounts()\">Add Accounts</button>\n            </li>\n            <li class=\"controls__item\">\n              <button type=\"button\" class=\"clr-btn--line\" (click)=\"assignBeneficiaries()\">Assign Beneficiaries</button>\n            </li>\n            <li class=\"controls__item controls__item--printer\">\n              <button type=\"button\" class=\"clr-btn--line\" (click)=\"printInfo()\">\n                <img src=\"/assets/images/icons/printer.svg\" alt=\"Print\">\n              </button>\n            </li>\n          </ul>\n        </header>\n        <ng-container *ngIf=\"!loading; else AssetsSideEffects\">\n          <div class=\"table-wrap\">\n          <table class=\"table\">\n            <thead class=\"table__head\">\n              <tr class=\"table__head-row\">\n                <th \n                  class=\"table__head-cell\"\n                  *ngFor=\"let title of tableTitles\">{{ title }}</th>\n              </tr>\n            </thead>\n            <tbody class=\"table__body\">\n              <tr \n                class=\"table__body-row table__body-row--index\" \n                *ngFor=\"let account of estatePlan.getAccounts(); let i = index\">\n                <td class=\"table__body-cell index\">{{ i + 1 }}</td>\n                <td \n                  class=\"table__body-cell\"\n                  *ngFor=\"let cell of account | keyvalue: keepOrder | slice:1; let i = index\">\n\n                  <ng-container *ngIf=\"\n                    cell.key === 'beneficiaries' || \n                    cell.key === 'asset_url' ||\n                    cell.key === 'asset_notes'; else cells\">\n                    <div *ngIf=\"cell.key === 'beneficiaries'\">\n                      <ul class=\"flx-l-c asset__beneficiaries\" *ngIf=\"cell.value.length > 0; else emptyState\">\n                        <li class=\"flx-col flx-c-c beneficiaries__item\" *ngFor=\"let beneficiary of cell.value | slice:0:5\">\n                          <p class=\"flx-c-c typography-s beneficiaries__priority\">{{ beneficiary.priority }}</p>\n                          <clr-avatar\n                            [size]=\"40\"\n                            [url]=\"beneficiary.profile_pic.length > 0 ? ('https://s3.amazonaws.com/' + beneficiary.profile_pic) : ''\"\n                            [tip]=\"beneficiary.user_email\"\n                            [userName]=\"helpers.initials(beneficiary.user_first_name, beneficiary.user_last_name)\"></clr-avatar>\n                        </li>\n                      </ul>\n                      <ng-template #emptyState>\n                        <p class=\"asset__beneficiaries-empty\">No Beneficiaries</p>\n                      </ng-template>\n                    </div>\n                    \n                    <a \n                      *ngIf=\"cell.key === 'asset_url' && cell.value\" \n                      [href]=\"cell.value\" \n                      class=\"asset__url\">{{ (cell.value | slice:0:20) + '...' }}</a>\n                    \n                    <div \n                      *ngIf=\"cell.key === 'asset_notes'\"\n                      class=\"asset__notes\">{{(cell.value | slice:0:55) + (cell.value.length > 55 ? '...' : '') }}</div>\n                  </ng-container>\n      \n                  <ng-template #cells>\n                    {{ cell.value }}\n                  </ng-template>\n                \n                </td>\n                <td class=\"table__body-cell\">\n                  <div class=\"flx-c-c\">\n                    <button type=\"button\" class=\"clr-btn-icon first\" (click)=\"editAsset(account.asset_unique_id)\">\n                      <i class=\"fa fa-edit icon-ep icon__edit\"></i>\n                    </button>\n                    <button type=\"button\" class=\"clr-btn-icon last\" (click)=\"deleteAsset(account.asset_unique_id)\">\n                      <i class=\"fa fa-trash-o icon-ep icon__delete\"></i>\n                    </button>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n          <div *ngIf=\"estatePlan.isEmpty()\" class=\"empty-state\">There are no accounts</div>\n        </ng-container>\n        <ng-template #AssetsSideEffects>\n          <div class=\"side-effect\">\n            <clr-loading></clr-loading>\n          </div>\n        </ng-template>\n      </div>\n    \n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"flx-b-c profile__header\">\n  <h2 class=\"title-h2\">Profile</h2>\n  <button type=\"button\" class=\"clr-btn\" [disabled]=\"!profileForm.valid\" (click)=\"saveUserProfile()\">Save</button>\n</header>\n\n<form [formGroup]=\"profileForm\">\n  <div class=\"input__block\">\n    <label class=\"input__label\" for=\"userFirstName\">First Name*</label>\n    <div class=\"input__inner\">\n      <input type=\"text\" id=\"userFirstName\" class=\"clr-input\" formControlName=\"user_first_name\" />\n    </div>\n  </div>\n\n  <div class=\"input__block\">\n    <label class=\"input__label\" for=\"userMiddleName\">Middle Name</label>\n    <div class=\"input__inner\">\n      <input type=\"text\" id=\"userMiddleName\" class=\"clr-input\" formControlName=\"user_middle_name\" />\n    </div>\n  </div>\n\n  <div class=\"input__block\">\n    <label class=\"input__label\" for=\"userLastName\">Last Name*</label>\n    <div class=\"input__inner\">\n      <input type=\"text\" id=\"userLastName\" class=\"clr-input\" formControlName=\"user_last_name\" />\n    </div>\n  </div>\n\n  <div class=\"flx-b-c\">\n    <div class=\"input__block input__block--width\">\n      <label class=\"input__label\" for=\"userPhone1\">Phone*</label>\n      <div class=\"input__inner\">\n        <input type=\"text\" id=\"userPhone1\" class=\"clr-input\" appPhoneMask formControlName=\"user_phone1\" />\n        <form-errors-messages [input]=\"profileForm.get('user_phone1')\" [pattern]=\"'phone'\"></form-errors-messages>\n      </div>\n    </div>\n  \n    <div class=\"input__block input__block--width\">\n      <label class=\"input__label\" for=\"userPhone2\">Second Phone</label>\n      <div class=\"input__inner\">\n        <input type=\"text\" id=\"userPhone2\" class=\"clr-input\" appPhoneMask formControlName=\"user_phone2\" />\n        <form-errors-messages [input]=\"profileForm.get('user_phone2')\" [pattern]=\"'phone'\"></form-errors-messages>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"flx-b-c\">\n    <div class=\"input__block input__block--country\">\n      <label class=\"input__label\" for=\"userCountry\">Country*</label>\n      <div class=\"input__inner\">\n        <ng-select \n          class=\"estate-plan-profile\"\n          [items]=\"countries\"\n          bindLabel=\"country\"\n          bindValue=\"id\"\n          [searchable]=\"false\"\n          [labelForId]=\"'userCountry'\"\n          [placeholder]=\"'Pick a country'\"\n          [clearable]=\"false\"\n          formControlName=\"user_country\"></ng-select>\n      </div>\n    </div>\n    <div class=\"input__block input__block--zip\">\n      <label class=\"input__label\" for=\"userZipCode\">Zip Code*</label>\n      <div class=\"input__inner\">\n        <input type=\"text\" id=\"userZipCode\" [pattern]= \"zipPattern\" class=\"clr-input\" formControlName=\"user_zip_code\" />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"input__block\">\n    <label class=\"input__label\" for=\"userState\">State*</label>\n    <div class=\"input__inner\">\n      <ng-select \n        class=\"estate-plan-profile\"\n        [items]=\"states\"\n        bindLabel=\"state\"\n        bindValue=\"id\"\n        [searchable]=\"false\"\n        [labelForId]=\"'userState'\"\n        [placeholder]=\"'Pick your state/province'\"\n        [clearable]=\"false\"\n        formControlName=\"user_state\"></ng-select>\n    </div>\n  </div>\n\n  <div class=\"input__block\">\n    <label class=\"input__label\" for=\"userCity\">City</label>\n    <div class=\"input__inner\">\n      <input type=\"text\" id=\"userCity\" class=\"clr-input\" formControlName=\"user_city\" />\n    </div>\n  </div>\n\n  <div class=\"input__block\">\n    <label class=\"input__label\" for=\"userAddress1\">Address 1</label>\n    <div class=\"input__inner\">\n      <input type=\"text\" id=\"userAddress1\" class=\"clr-input\" formControlName=\"user_address1\" />\n    </div>\n  </div>\n\n  <div class=\"input__block\">\n    <label class=\"input__label\" for=\"userAddress2\">Address 2</label>\n    <div class=\"input__inner\">\n      <input type=\"text\" id=\"userAddress2\" class=\"clr-input\" formControlName=\"user_address2\" />\n    </div>\n  </div>\n\n  <div class=\"input__block\">\n    <label class=\"input__label\" for=\"userAddress3\">Address 3</label>\n    <div class=\"input__inner\">\n      <input type=\"text\" id=\"userAddress3\" class=\"clr-input\" formControlName=\"user_address3\" />\n    </div>\n  </div>\n\n  <div class=\"input__block\">\n    <label class=\"flx input__label\" for=\"estatePlanTC\">\n      <input type=\"checkbox\" id=\"estatePlanTC\" class=\"clr-checkbox\" formControlName=\"estatePlanTC\" />\n      <span class=\"clr-checkbox__box\"></span>\n      <span class=\"clr-checkbox__label\">I agree to the \n        <button type=\"button\" class=\"clr-btn--line\" (click)=\"showTermsConditions()\">Terms & Conditions</button> of the above selected state of domicile</span>\n    </label>\n  </div>\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"lock\" [config]=\"{animationType:'three-bounce'}\"></ngx-loading>\n<aside class=\"clr-block profile\">\n  <ng-container *ngIf=\"(userProfile$ | async); else UserProfileSideEffects\">    \n    <user-profile\n      class=\"user-profile\"\n      *ngIf=\"!isEditUser\"\n      [userProfile]=\"userProfile\"\n      (editProfileEvent)=\"isEditUser = !isEditUser\"></user-profile>\n    <edit-user-profile \n      class=\"user-profile user-profile--edit\"\n      *ngIf=\"isEditUser\"\n      [userProfile]=\"userProfile\"\n      (saveUserProfileEvent)=\"saveUserProfile($event)\"></edit-user-profile>\n  </ng-container>\n  <ng-template #UserProfileSideEffects>\n    <div class=\"side-effect\">\n      <clr-loading></clr-loading>\n    </div>\n  </ng-template>\n</aside>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"flx-b-c profile__header\">\n  <h2 class=\"title-h2\">Profile</h2>\n  <button type=\"button\" class=\"clr-btn-border\" (click)=\"editProfile()\">Edit</button>\n</header>\n<div *ngIf=\"userProfile.profile_pic !== undefined\">\n  <clr-avatar\n  class=\"flx-c-c avatar\"\n  [size]=\"285\"\n  [square]=\"true\"\n  [initialsSize]=\"40\"\n  [url]=\"profileImageUrl\"\n  [userName]=\"helpers.initials(userProfile.user_first_name, userProfile.user_last_name)\"></clr-avatar>\n</div>\n\n<div class=\"profile\">\n  <h3 class=\"profile__key\">Name</h3>\n  <p class=\"profile__value\">{{ userProfile.user_first_name }} {{ userProfile.user_middle_name }} {{ userProfile.user_last_name }}</p>\n</div>\n\n<div class=\"flx-b-t\">\n  <div class=\"profile profile--phone\">\n    <h3 class=\"profile__key\">Phone</h3>\n    <p class=\"profile__value\">\n      <ng-container *ngIf=\"userProfile.user_phone1 !== ''; else emptyPhone\">\n        {{ userProfile.user_phone1 }}\n      </ng-container>\n      <ng-template #emptyPhone>\n        <span class=\"profile__value--empty\">Empty</span>\n      </ng-template>\n    </p>\n  </div>\n\n  <div class=\"profile profile--phone\">\n    <h3 class=\"profile__key\">Second Phone</h3>\n    <p class=\"profile__value\">\n      <ng-container *ngIf=\"userProfile.user_phone2 !== ''; else emptySecondPhone\">\n        {{ userProfile.user_phone2 }}\n      </ng-container>\n      <ng-template #emptySecondPhone>\n        <span class=\"profile__value--empty\">Empty</span>\n      </ng-template>\n    </p>\n  </div>\n</div>\n\n<div class=\"profile\">\n  <h3 class=\"profile__key\">State of Domicile</h3>\n  <p class=\"profile__value\">\n    <ng-container *ngIf=\"addressLines([userProfile.user_address1, userProfile.user_address2, userProfile.user_address3,\n      userProfile.user_city, userProfile.user_state.state, userProfile.user_zip_code, \n      userProfile.user_country.country]).length > 0; else emptyState\">\n      <p class=\"profile__value--indent\" *ngIf=\"addressLines([userProfile.user_address1, \n        userProfile.user_address2, userProfile.user_address3]).length > 0\">\n        {{ addressLines([userProfile.user_address1, \n          userProfile.user_address2, \n          userProfile.user_address3]) }}\n      </p>\n      <p class=\"profile__value--indent\" *ngIf=\"addressLines([userProfile.user_city, \n          userProfile.user_state.state, userProfile.user_zip_code, userProfile.user_country.country]).length > 0\"> \n        {{ addressLines([userProfile.user_city, \n          userProfile.user_state.state, \n          userProfile.user_zip_code, \n          userProfile.user_country.country]) }}</p>\n    </ng-container>\n    <ng-template #emptyState>\n      <span class=\"profile__value--empty\">Empty</span>\n    </ng-template>\n  </p>\n</div>\n\n<div class=\"flx checkbox\">\n  <span class=\"checkbox__box\" [ngClass]=\"{checked: userProfile.estatePlanTC === 'YES'}\"></span>\n  <p class=\"checkbox__title profile__value\">I agree to the \n    <button type=\"button\" class=\"clr-btn--line\" (click)=\"showTermsConditions()\">Terms & Conditions</button> of the above selected state of domicile</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"lock\" [config]=\"{animationType:'three-bounce'}\"></ngx-loading>\n<header class=\"flx-b-c header\">\n  <h2 class=\"title-h2\">Beneficiaries</h2>\n  <button \n    type=\"button\"\n    *ngIf=\"accountId\"\n    class=\"clr-btn-border\"\n    (click)=\"addBeneficiaries()\">Add</button>\n</header>\n\n<div class=\"empty-state\" *ngIf=\"!accountId\">Create the Account before assigning Beneficiaries</div>\n\n<ng-container *ngIf=\"accountId\">\n  <ng-container *ngIf=\"(beneficiaries$ | async); else AssetsSideEffects\">\n    <ul \n      class=\"list\"\n      *ngIf=\"!beneficiaries.isEmpty(); else EmptyState\"\n      cdkDropList\n      (cdkDropListDropped)=\"changeOrder($event)\">\n      <li \n        class=\"flx-l-c list__item\"\n        *ngFor=\"let beneficiary of beneficiaries.getBeneficiaries(); let i = index\"\n        cdkDrag>\n        <div class=\"flx-c-c index\">{{ i + 1 }}</div>\n        <clr-avatar\n          [size]=\"40\"\n          [url]=\"(beneficiary.profile_pic && beneficiary.profile_pic.length > 0) ? ('https://s3.amazonaws.com/' + beneficiary.profile_pic) : ''\"\n          [userName]=\"helpers.initials(beneficiary.user_first_name, beneficiary.user_last_name)\"></clr-avatar>\n          \n        <div style=\"margin: 0 0 0 20px;\">\n          <div class=\"flx\">\n            <p style=\"margin: 0;\">Email: </p>\n            <p class=\"info__key\">{{ ' ' + beneficiary.user_email }}</p>\n          </div>\n          <div class=\"flx\">\n            <p style=\"margin: 0;\">Relationship: </p>\n            <p style=\"margin: 0 0 0 10px;\">{{beneficiary.relationship }}</p>\n          </div>\n        </div>\n          \n        <div class=\"flx-c-c controls\">\n          <button type=\"button\" class=\"clr-btn--line\" (click)=\"removeFromList(beneficiary.user_caretaker_id)\">\n            <img src=\"/assets/images/icons/delete.svg\" alt=\"Delete account\">\n          </button> \n          <button type=\"button\" class=\"clr-btn--line\">\n            <img src=\"/assets/images/icons/drag.svg\" alt=\"Drag and drop icon\">\n          </button>\n        </div>\n      </li>\n    </ul>\n    <footer class=\"flx-c-c\" *ngIf=\"accountId && +accountId !== -1\">\n      <button \n        type=\"button\"\n        [disabled]=\"!this.amount && beneficiaries.isEmpty()\"\n        class=\"clr-btn clr-btn--asset\"\n        (click)=\"saveBeneficiaries()\">Save Beneficiaries</button>\n    </footer>\n    <ng-template #EmptyState>\n      <p class=\"empty-state\">No Beneficiaries</p>\n    </ng-template>\n  </ng-container>\n  <ng-template #AssetsSideEffects>\n    <clr-loading></clr-loading>\n  </ng-template>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"lock\" [config]=\"{animationType:'three-bounce'}\"></ngx-loading>\n<main class=\"main\">\n  <header class=\"header\">\n    <button type=\"button\" class=\"clr-btn-border\" (click)=\"backToList()\">Back</button>\n    <h1 class=\"title-h1 title-h1--position\">{{ assetId ? 'Edit Account' : 'New Account' }}</h1>\n  </header>\n\n  <div class=\"flx-b-s main__inner\">\n    <div class=\"clr-block asset\">\n      <header class=\"flx-b-c form-header\">\n        <h2 class=\"title-h2\">Account Details</h2>\n        <ng-container *ngIf=\"(initFormData$ | async)\">\n          <button \n            type=\"button\" \n            class=\"clr-btn\" \n            [disabled]=\"!assetForm.valid\"\n            (click)=\"submitForm(!assetId ? '' : 'update')\"> {{ !assetId ? 'Save' : 'Update' }}</button>\n        </ng-container>\n      </header>\n      <ng-container *ngIf=\"(initFormData$ | async); else AssetsSideEffects\">\n        <form [formGroup]=\"assetForm\">\n          <div class=\"input__block\">\n            <label class=\"input__label\" for=\"assetTitle\">Account Name \n              <span class=\"input__required\">*</span>\n              <tooltip [width]=\"'370px'\" arrowDirection=\"right\"><p class=\"typography-s\" [innerHTML]=\"staticText.tooltips.account_name\"></p></tooltip>\n            </label>\n            <div class=\"input__inner\">\n              <input type=\"text\" id=\"assetTitle\" class=\"clr-input\" formControlName=\"asset_title\" />\n              <form-errors-messages \n                class=\"errors-messages\"  \n                [input]=\"assetForm.get('asset_title')\"></form-errors-messages>\n            </div>\n          </div> \n\n          <div class=\"input__block\">\n            <label class=\"input__label\" for=\"group\">Drawer (Account Group) \n              <span class=\"input__required\">*</span>\n              <tooltip [width]=\"'370px'\" arrowDirection=\"right\"><p class=\"typography-s\" [innerHTML]=\"staticText.tooltips.account_group\"></p></tooltip>\n            </label>\n            <div class=\"input__inner\">\n              <ng-select \n                [items]=\"drawersGroup\"\n                bindLabel=\"asset_group_title\"\n                bindValue=\"ag_id\"\n                [searchable]=\"false\"\n                [placeholder]=\"drawersGroup.length === 0 ? 'No Drawers' : 'Choose a Drawer'\"\n                [clearable]=\"false\"\n                formControlName=\"asset_group_id\"></ng-select>\n                <form-errors-messages \n                  class=\"errors-messages\" \n                  [input]=\"assetForm.get('asset_group_id')\"></form-errors-messages>\n                <!-- <p class=\"group-disclaimer\">Can only be selected when account creating</p> -->\n            </div>\n          </div>\n\n          <div class=\"input__block\">\n            <label class=\"input__label\" for=\"image\">Account User ID  \n              <tooltip [width]=\"'230px'\" arrowDirection=\"right\"><p class=\"typography-s\">{{ staticText.tooltips.account_user_id }}</p></tooltip>\n            </label>\n            <div class=\"input__inner\">\n              <input type=\"text\" id=\"image\" class=\"clr-input\" formControlName=\"asset_account_num\" />\n            </div>\n          </div>\n\n          <div class=\"input__block\">\n            <label class=\"input__label\" for=\"passwordHint\">Password Hint\n              <tooltip [width]=\"'370px'\" arrowDirection=\"right\"><p class=\"typography-s\" [innerHTML]=\"staticText.tooltips.password_hint\"></p></tooltip>\n            </label>\n            <div class=\"input__inner\">\n              <ng-select \n                [items]=\"passwordHints\"\n                bindLabel=\"pwd_hint\"\n                bindValue=\"pwd_hint_id\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [placeholder]=\"passwordHints.length === 0 ? 'No Password Hints' : 'Choose a Password Hint'\"\n                formControlName=\"PasswordHint_id\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"input__block\">\n            <label class=\"input__label\" for=\"url\">Website Address\n              <tooltip [width]=\"'200px'\" arrowDirection=\"right\"><p class=\"typography-s\">{{ staticText.tooltips.website_address }}</p></tooltip>\n            </label>\n            <div class=\"input__inner\">\n              <input type=\"text\" id=\"url\" class=\"clr-input\" formControlName=\"asset_url\" />\n            </div>\n          </div>\n\n          <div class=\"input__block\">\n            <label class=\"input__label\" for=\"notes\">Notes\n              <tooltip [width]=\"'370px'\" arrowDirection=\"right\"><p  class=\"typography-s\">{{ staticText.tooltips.note }}</p></tooltip>\n            </label>\n            <div class=\"input__inner\">\n              <textarea id=\"notes\" class=\"clr-textarea\" formControlName=\"asset_notes\"></textarea>\n            </div>\n          </div>\n        </form>\n      </ng-container>\n      <ng-template #AssetsSideEffects>\n        <clr-loading></clr-loading>\n      </ng-template>\n    </div>\n\n    <div class=\"clr-block flx flx-col beneficiaries\">\n      <app-beneficiaries-block\n        [accountId]=\"assetId\"></app-beneficiaries-block>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading [show]=\"lock\" [config]=\"{animationType:'three-bounce'}\"></ngx-loading>\n<popup-wrap\n  [title]=\"'Accounts'\">\n\n  <label leftSide leftSide class=\"flx input__label input__label--check-all\" for=\"chooseAllAccounts\">\n    <input \n      type=\"checkbox\" \n      id=\"chooseAllAccounts\" \n      class=\"clr-checkbox\"\n      [disabled]=\"accounts.isEmpty()\"\n      (change)=\"chooseAllEvent = $event\" />\n    <span class=\"clr-checkbox__box\"></span>\n    <span class=\"clr-checkbox__label\">Choose All</span>\n  </label>\n\n  <accounts-list \n    [onChooseAllEvent]=\"chooseAllEvent\" (onChooseAll)=\"onChooseAll($event)\" ></accounts-list>\n\n  <footer class=\"flx-b-c footer\">\n    <button \n      type=\"button\" \n      mat-dialog-close\n      class=\"clr-btn-border clr-btn--asset\">Close</button>\n    <button \n      type=\"button\" \n      class=\"clr-btn clr-btn--beneficiaries\"\n      (click)=\"addToEstatePlan()\" [disabled]=\"accounts.isEmpty()\">Add Accounts</button>\n  </footer>\n</popup-wrap>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<popup-wrap\n  title=\"Contacts\">\n  <ng-container *ngIf=\"(contacts$ | async); else ContactsSideEffects\">\n    <ng-container *ngIf=\"contacts.length > 0; EmptyState\">\n      <form [formGroup]=\"contactsForm\">\n        <ul class=\"flx flx-col list\">\n          <li class=\"flx-l-c list__item\" *ngFor=\"let contact of contactControls.controls; let i = index\"> \n\n            <label class=\"flx input__label\" [for]=\"contacts[i].user_email\">\n              <input \n                type=\"checkbox\" \n                [id]=\"contacts[i].user_email\" \n                class=\"clr-checkbox\" \n                [formControl]=\"contact\"\n                (change)=\"onCheckboxChanges($event, contacts[i])\" />\n              <span class=\"clr-checkbox__box\"></span>\n            </label>\n            <div *ngIf=\"(contacts[i].user_first_name !== null) && (contacts[i].user_last_name !==null)\">\n              <clr-avatar\n                [size]=\"40\"\n                [url]=\"(contacts[i].profile_pic && contacts[i].profile_pic.length > 0) ? ('https://s3.amazonaws.com/' + contacts[i].profile_pic) : ''\"\n                [userName]=\"helpers.initials(contacts[i].user_first_name, contacts[i].user_last_name)\"></clr-avatar>\n            </div>\n\n            <div *ngIf=\"(contacts[i].user_first_name === null) && (contacts[i].user_last_name ===null)\">\n              <clr-avatar\n                [size]=\"40\"\n                [url]=\"(contacts[i].profile_pic && contacts[i].profile_pic.length > 0) ? ('https://s3.amazonaws.com/' + contacts[i].profile_pic) : ''\"\n                ></clr-avatar>\n            </div>\n              \n            <div style=\"margin: 0 0 0 20px;\">\n              <div class=\"flx\">\n                <p style=\"margin: 0;\">Email: </p>\n                <p class=\"info__key\">{{ ' ' + contacts[i].user_email }}</p>\n              </div>\n              <div class=\"flx\">\n                <p style=\"margin: 0;\">Relationship: </p>\n                <p style=\"margin: 0 0 0 10px;\">{{contacts[i].relationship }}</p>\n              </div>\n            </div>\n\n          </li>\n        </ul>\n      </form>\n\n      <footer class=\"flx-b-c footer\">\n        <button \n          type=\"button\" \n          mat-dialog-close\n          class=\"clr-btn-border clr-btn--asset\">Close</button>\n        <button \n          type=\"button\" \n          class=\"clr-btn clr-btn--beneficiaries\"\n          (click)=\"addToBeneficiaries()\">Add Contacts</button>\n      </footer>\n\n    </ng-container>\n    <div *ngIf=\"contacts.length == 0;\" class=\"empty-state\">No Contacts to add.  Please use Contacts screen to create new Contacts.</div>\n    <!-- <ng-template #EmptyState>\n      <p class=\"empty-state\">There are no any contacts</p>\n    </ng-template> -->\n  </ng-container>\n  <ng-template #ContactsSideEffects>\n    <clr-loading></clr-loading>\n  </ng-template>\n</popup-wrap>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<popup-wrap\n  title=\"Terms & Conditions\">\n\n  <div class=\"indent\">\n    <terms-conditions-content></terms-conditions-content>\n  </div>\n\n  <button \n    type=\"button\"\n    mat-dialog-close\n    class=\"clr-btn\">Got It</button>\n</popup-wrap>"

/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: BeneficiariesService, EstatePlanService, ApiService, HelpersService, ProfileService, AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _beneficiaries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beneficiaries.service */ "./src/app/core/services/beneficiaries.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeneficiariesService", function() { return _beneficiaries_service__WEBPACK_IMPORTED_MODULE_0__["BeneficiariesService"]; });

/* harmony import */ var _estate_plan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estate-plan.service */ "./src/app/core/services/estate-plan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EstatePlanService", function() { return _estate_plan_service__WEBPACK_IMPORTED_MODULE_1__["EstatePlanService"]; });

/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]; });

/* harmony import */ var _helpers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.service */ "./src/app/core/services/helpers.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpersService", function() { return _helpers_service__WEBPACK_IMPORTED_MODULE_3__["HelpersService"]; });

/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.service */ "./src/app/core/services/profile.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]; });

/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accounts.service */ "./src/app/core/services/accounts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return _accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]; });









/***/ }),

/***/ "./src/app/features/estate-plan/components/accounts-list/accounts-list.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/features/estate-plan/components/accounts-list/accounts-list.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  height: 500px;\n  overflow: auto;\n  margin: 0 0 20px 0;\n  padding: 0;\n  list-style: none;\n}\n\n.list__item {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.list__item:not(:last-child) {\n  margin: 0 0 10px 0;\n}\n\n.clr-btn--beneficiaries {\n  width: 130px;\n}\n\n.input__label {\n  margin: 0;\n}\n\n.input__label--check-all {\n  margin: 4px 0 0 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vY29tcG9uZW50cy9hY2NvdW50cy1saXN0L2FjY291bnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2VzdGF0ZS1wbGFuL2NvbXBvbmVudHMvYWNjb3VudHMtbGlzdC9hY2NvdW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vY29tcG9uZW50cy9hY2NvdW50cy1saXN0L2FjY291bnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0X19pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlzdF9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4vLyBtb2RpZmljYXRpb25zXG4uY2xyLWJ0bi0tYmVuZWZpY2lhcmllcyB7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmlucHV0X19sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlucHV0X19sYWJlbC0tY2hlY2stYWxsIHtcbiAgbWFyZ2luOiA0cHggMCAwIDExcHg7XG59IiwiLmxpc3Qge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGlzdF9faXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxpc3RfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLmNsci1idG4tLWJlbmVmaWNpYXJpZXMge1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5pbnB1dF9fbGFiZWwge1xuICBtYXJnaW46IDA7XG59XG5cbi5pbnB1dF9fbGFiZWwtLWNoZWNrLWFsbCB7XG4gIG1hcmdpbjogNHB4IDAgMCAxMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/estate-plan/components/accounts-list/accounts-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/features/estate-plan/components/accounts-list/accounts-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsListComponent", function() { return AccountsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../core/services/accounts.service */ "./src/app/core/services/accounts.service.ts");




// services

var AccountsListComponent = /** @class */ (function () {
    function AccountsListComponent(fb, accountsService) {
        this.fb = fb;
        this.accountsService = accountsService;
        this.isAll = false;
        this.onChooseAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.accounts = this.accountsService.accounts;
    }
    Object.defineProperty(AccountsListComponent.prototype, "onChooseAllEvent", {
        get: function () {
            return this._onChooseAllEvent;
        },
        set: function (value) {
            if (value) {
                this.chooseAllEvent(value);
                this._onChooseAllEvent = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    AccountsListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountsListComponent.prototype.ngOnDestroy = function () {
        this.accounts.clearAll();
    };
    /**
     * get all accounts from API and get accounts
     */
    AccountsListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.accounts$ = this.accountsService.getAccounts(this.isAll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.accounts.setAccounts(response.data.assets);
            _this.createAccountForm();
            return response.data;
        }));
    };
    /**
     * create account list form
     */
    AccountsListComponent.prototype.createAccountForm = function () {
        this.accountForm = this.fb.group({
            accounts: this.buildAccounts()
        });
    };
    Object.defineProperty(AccountsListComponent.prototype, "accountControls", {
        /**
         * get list of controls from accounts form
         */
        get: function () {
            return this.accountForm.get('accounts');
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * add accounts list to FormArray controls
     */
    AccountsListComponent.prototype.buildAccounts = function () {
        var _this = this;
        var array = this.accounts.getAccounts().map(function () {
            return _this.fb.control(false);
        });
        return this.fb.array(array);
    };
    /**
     * manage local account list
     */
    AccountsListComponent.prototype.onCheckboxChanges = function (event, account) {
        if (!event.target.checked) {
            this.accounts.removeCheckedAccount(account.asset_unique_id);
            console.log('on deselect');
            this.onChooseAll.emit(false);
        }
        if (event.target.checked) {
            this.accounts.setCheckedAccount(account);
        }
    };
    /**
     * choose all accounts
     */
    AccountsListComponent.prototype.chooseAllEvent = function (event) {
        this.accountControls.controls.map(function (control) {
            control.setValue(event.target.checked);
        });
        this.accounts.setCheckedAccounts(event.target.checked ? tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.accounts.getAccounts()) : []);
    };
    AccountsListComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AccountsListComponent.prototype, "onChooseAllEvent", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AccountsListComponent.prototype, "isAll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AccountsListComponent.prototype, "onChooseAll", void 0);
    AccountsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'accounts-list',
            template: __webpack_require__(/*! raw-loader!./accounts-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/components/accounts-list/accounts-list.component.html"),
            styles: [__webpack_require__(/*! ./accounts-list.component.scss */ "./src/app/features/estate-plan/components/accounts-list/accounts-list.component.scss")]
        })
    ], AccountsListComponent);
    return AccountsListComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 95%;\n  max-width: 1126px;\n  margin: 0 auto;\n  padding: 1px 0 20px 0;\n}\n@media only screen and (max-device-width: 998px) {\n  :host {\n    width: 100%;\n  }\n}\n@media only screen and (max-device-width: 998px) {\n  .main__inner {\n    flex-direction: column;\n  }\n}\n.header {\n  position: relative;\n  margin: 20px 0;\n}\n@media only screen and (max-device-width: 998px) {\n  .left-side {\n    margin: 0 0 20px 0;\n  }\n}\n.left-side,\n.right-side {\n  width: 49%;\n  min-height: 300px;\n  padding: 20px;\n}\n@media only screen and (max-device-width: 998px) {\n  .left-side,\n.right-side {\n    width: 100%;\n  }\n}\n@media only screen and (max-device-width: 998px) {\n  .clr-btn-border {\n    margin: 0 0 0 15px;\n    padding: 4px 0;\n    min-width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vY29tcG9uZW50cy9zaW5nbGUtcGFnZS1sYXlvdXQvc2luZ2xlLXBhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9jb21wb25lbnRzL3NpbmdsZS1wYWdlLWxheW91dC9zaW5nbGUtcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQVBGO0lBU0ksV0FBQTtFQ0NGO0FBQ0Y7QURHRTtFQURGO0lBR0ksc0JBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNBRjtBRElFO0VBREY7SUFHSSxrQkFBQTtFQ0RGO0FBQ0Y7QURJQTs7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDREY7QURHRTtFQU5GOztJQVFJLFdBQUE7RUNBRjtBQUNGO0FESUU7RUFERjtJQUdJLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vY29tcG9uZW50cy9zaW5nbGUtcGFnZS1sYXlvdXQvc2luZ2xlLXBhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDk1JTtcbiAgbWF4LXdpZHRoOiAxMTI2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcHggMCAyMHB4IDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgICAvLyBtb2JpbGVcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ubWFpbl9faW5uZXIge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5sZWZ0LXNpZGUge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgfVxufVxuXG4ubGVmdC1zaWRlLFxuLnJpZ2h0LXNpZGUge1xuICB3aWR0aDogNDklO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMjBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jbHItYnRuLWJvcmRlciB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gICAgLy8gbW9iaWxlXG4gICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5NSU7XG4gIG1heC13aWR0aDogMTEyNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMXB4IDAgMjBweCAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gIC5tYWluX19pbm5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgLmxlZnQtc2lkZSB7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICB9XG59XG5cbi5sZWZ0LXNpZGUsXG4ucmlnaHQtc2lkZSB7XG4gIHdpZHRoOiA0OSU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgLmxlZnQtc2lkZSxcbi5yaWdodC1zaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAuY2xyLWJ0bi1ib3JkZXIge1xuICAgIG1hcmdpbjogMCAwIDAgMTVweDtcbiAgICBwYWRkaW5nOiA0cHggMDtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SinglePageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageLayoutComponent", function() { return SinglePageLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// 3rd party libs


var SinglePageLayoutComponent = /** @class */ (function () {
    function SinglePageLayoutComponent(router) {
        this.router = router;
    }
    SinglePageLayoutComponent.prototype.ngOnInit = function () {
    };
    /**
   * back to the estate plan list
   */
    SinglePageLayoutComponent.prototype.backToList = function () {
        this.router.navigate(['/estate-plan']);
    };
    SinglePageLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SinglePageLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'single-page-layout',
            template: __webpack_require__(/*! raw-loader!./single-page-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.html"),
            styles: [__webpack_require__(/*! ./single-page-layout.component.scss */ "./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.scss")]
        })
    ], SinglePageLayoutComponent);
    return SinglePageLayoutComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/estate-plan-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/estate-plan/estate-plan-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: EstatePlanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstatePlanRoutingModule", function() { return EstatePlanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_estate_plan_page_estate_plan_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/estate-plan-page/estate-plan-page.component */ "./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.ts");
/* harmony import */ var _pages_single_asset_page_single_asset_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/single-asset-page/single-asset-page.component */ "./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.ts");
/* harmony import */ var _pages_assign_beneficiaries_page_assign_beneficiaries_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/assign-beneficiaries-page/assign-beneficiaries-page.component */ "./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.ts");




// components



var routes = [
    { path: '', component: _pages_estate_plan_page_estate_plan_page_component__WEBPACK_IMPORTED_MODULE_4__["EstatePlanPageComponent"] },
    { path: 'new', component: _pages_single_asset_page_single_asset_page_component__WEBPACK_IMPORTED_MODULE_5__["SingleAssetPageComponent"] },
    { path: 'edit/:id', component: _pages_single_asset_page_single_asset_page_component__WEBPACK_IMPORTED_MODULE_5__["SingleAssetPageComponent"] },
    { path: 'assign-beneficiaries', component: _pages_assign_beneficiaries_page_assign_beneficiaries_page_component__WEBPACK_IMPORTED_MODULE_6__["AssignBeneficiariesPageComponent"] }
];
var EstatePlanRoutingModule = /** @class */ (function () {
    function EstatePlanRoutingModule() {
    }
    EstatePlanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], EstatePlanRoutingModule);
    return EstatePlanRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/estate-plan.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/estate-plan/estate-plan.module.ts ***!
  \************************************************************/
/*! exports provided: EstatePlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstatePlanModule", function() { return EstatePlanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _estate_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estate-plan-routing.module */ "./src/app/features/estate-plan/estate-plan-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_estate_plan_page_estate_plan_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/estate-plan-page/estate-plan-page.component */ "./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.ts");
/* harmony import */ var _pages_estate_plan_page_user_profile_block_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/estate-plan-page/user-profile-block/user-profile/user-profile.component */ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_estate_plan_page_user_profile_block_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component */ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.ts");
/* harmony import */ var _pages_estate_plan_page_user_profile_block_user_profile_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/estate-plan-page/user-profile-block/user-profile-block.component */ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.ts");
/* harmony import */ var _pages_single_asset_page_single_asset_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/single-asset-page/single-asset-page.component */ "./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.ts");
/* harmony import */ var _popups_add_accounts_popup_add_accounts_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popups/add-accounts-popup/add-accounts-popup.component */ "./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.ts");
/* harmony import */ var _popups_add_beneficiaries_popup_add_beneficiaries_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popups/add-beneficiaries-popup/add-beneficiaries-popup.component */ "./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.ts");
/* harmony import */ var _pages_single_asset_page_beneficiaries_block_beneficiaries_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/single-asset-page/beneficiaries-block/beneficiaries-block.component */ "./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.ts");
/* harmony import */ var _popups_terms_conditions_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popups/terms-conditions-popup/terms-conditions-popup.component */ "./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.ts");
/* harmony import */ var _pages_assign_beneficiaries_page_assign_beneficiaries_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/assign-beneficiaries-page/assign-beneficiaries-page.component */ "./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.ts");
/* harmony import */ var _components_single_page_layout_single_page_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/single-page-layout/single-page-layout.component */ "./src/app/features/estate-plan/components/single-page-layout/single-page-layout.component.ts");
/* harmony import */ var _components_accounts_list_accounts_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/accounts-list/accounts-list.component */ "./src/app/features/estate-plan/components/accounts-list/accounts-list.component.ts");

// 3rd party libs


// modules


// components





// components popups







var EstatePlanModule = /** @class */ (function () {
    function EstatePlanModule() {
    }
    EstatePlanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_estate_plan_page_estate_plan_page_component__WEBPACK_IMPORTED_MODULE_5__["EstatePlanPageComponent"],
                _pages_estate_plan_page_user_profile_block_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _pages_estate_plan_page_user_profile_block_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditUserProfileComponent"],
                _pages_estate_plan_page_user_profile_block_user_profile_block_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileBlockComponent"],
                _pages_single_asset_page_single_asset_page_component__WEBPACK_IMPORTED_MODULE_9__["SingleAssetPageComponent"],
                _popups_add_accounts_popup_add_accounts_popup_component__WEBPACK_IMPORTED_MODULE_10__["AddAccountsPopupComponent"],
                _popups_add_beneficiaries_popup_add_beneficiaries_popup_component__WEBPACK_IMPORTED_MODULE_11__["AddBeneficiariesPopupComponent"],
                // popups
                _popups_add_accounts_popup_add_accounts_popup_component__WEBPACK_IMPORTED_MODULE_10__["AddAccountsPopupComponent"],
                _popups_add_beneficiaries_popup_add_beneficiaries_popup_component__WEBPACK_IMPORTED_MODULE_11__["AddBeneficiariesPopupComponent"],
                _pages_single_asset_page_beneficiaries_block_beneficiaries_block_component__WEBPACK_IMPORTED_MODULE_12__["BeneficiariesBlockComponent"],
                _popups_terms_conditions_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_13__["TermsConditionsPopupComponent"],
                _pages_assign_beneficiaries_page_assign_beneficiaries_page_component__WEBPACK_IMPORTED_MODULE_14__["AssignBeneficiariesPageComponent"],
                _components_single_page_layout_single_page_layout_component__WEBPACK_IMPORTED_MODULE_15__["SinglePageLayoutComponent"],
                _components_accounts_list_accounts_list_component__WEBPACK_IMPORTED_MODULE_16__["AccountsListComponent"]
            ],
            entryComponents: [
                _popups_add_accounts_popup_add_accounts_popup_component__WEBPACK_IMPORTED_MODULE_10__["AddAccountsPopupComponent"],
                _popups_add_beneficiaries_popup_add_beneficiaries_popup_component__WEBPACK_IMPORTED_MODULE_11__["AddBeneficiariesPopupComponent"],
                _popups_terms_conditions_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_13__["TermsConditionsPopupComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _estate_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__["EstatePlanRoutingModule"]
            ]
        })
    ], EstatePlanModule);
    return EstatePlanModule;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input__label--check-all {\n  margin: 0 0 15px 12px;\n}\n\n.title-wrap {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@media only screen and (max-device-width: 998px) {\n  .title-wrap {\n    top: -18px;\n    left: auto;\n    transform: none;\n    width: 74%;\n    right: 15px;\n    text-align: center;\n  }\n}\n\n.title-h1,\n.title-h4 {\n  color: #000;\n}\n\n.title-h2 {\n  margin: 0 0 20px 0;\n}\n\n.clr-btn {\n  margin: 0 0 0 20px;\n}\n\n@media only screen and (max-device-width: 998px) {\n  .clr-btn {\n    position: absolute;\n    right: 9px;\n    top: -69px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvYXNzaWduLWJlbmVmaWNpYXJpZXMtcGFnZS9hc3NpZ24tYmVuZWZpY2lhcmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9wYWdlcy9hc3NpZ24tYmVuZWZpY2lhcmllcy1wYWdlL2Fzc2lnbi1iZW5lZmljaWFyaWVzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FEQ0U7RUFORjtJQVFJLFVBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGOztBREdBOztFQUVFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVFO0VBSEY7SUFLSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2VzdGF0ZS1wbGFuL3BhZ2VzL2Fzc2lnbi1iZW5lZmljaWFyaWVzLXBhZ2UvYXNzaWduLWJlbmVmaWNpYXJpZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dF9fbGFiZWwtLWNoZWNrLWFsbCB7XG4gIG1hcmdpbjogMCAwIDE1cHggMTJweDsgXG59ICAgXG5cbi50aXRsZS13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIHRvcDogLTE4cHg7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgd2lkdGg6IDc0JTtcbiAgICByaWdodDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLy9tb2RpZmljYXRpb25zXG4udGl0bGUtaDEsXG4udGl0bGUtaDQge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRpdGxlLWgyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4uY2xyLWJ0biB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOXB4O1xuICAgIHRvcDogLTY5cHg7XG4gIH1cbn1cbiIsIi5pbnB1dF9fbGFiZWwtLWNoZWNrLWFsbCB7XG4gIG1hcmdpbjogMCAwIDE1cHggMTJweDtcbn1cblxuLnRpdGxlLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgLnRpdGxlLXdyYXAge1xuICAgIHRvcDogLTE4cHg7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgd2lkdGg6IDc0JTtcbiAgICByaWdodDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnRpdGxlLWgxLFxuLnRpdGxlLWg0IHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50aXRsZS1oMiB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbn1cblxuLmNsci1idG4ge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAuY2xyLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA5cHg7XG4gICAgdG9wOiAtNjlweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AssignBeneficiariesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignBeneficiariesPageComponent", function() { return AssignBeneficiariesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/beneficiaries.service */ "./src/app/core/services/beneficiaries.service.ts");





// services


var AssignBeneficiariesPageComponent = /** @class */ (function () {
    function AssignBeneficiariesPageComponent(router, accountsService, beneficiariesService) {
        this.router = router;
        this.accountsService = accountsService;
        this.beneficiariesService = beneficiariesService;
        this.lock = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.accounts = this.accountsService.accounts;
        this.beneficiaries = this.beneficiariesService.beneficiaries;
    }
    AssignBeneficiariesPageComponent.prototype.ngOnInit = function () { };
    AssignBeneficiariesPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.beneficiaries.clearAll();
    };
    /**
     * add beneficiaries for bulk accounts
     */
    AssignBeneficiariesPageComponent.prototype.onChooseAll = function ($event) {
        this.chooseAllEvent.target.checked = false;
    };
    AssignBeneficiariesPageComponent.prototype.assignBeneficiaries = function () {
        var _this = this;
        this.lock = true;
        var forSaving = {
            accounts: [],
            beneficiaries: []
        };
        forSaving.accounts = this.accounts
            .getCheckedAccounts().map(function (account) {
            return account.asset_unique_id;
        });
        this.beneficiaries.getBeneficiaries()
            .forEach(function (beneficiary, index) {
            forSaving.beneficiaries.push({
                contactId: beneficiary.user_caretaker_id,
                priority: index + 1
            });
        });
        this.beneficiariesService.getBulkBeneficiariesByAccounts(forSaving)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function () {
            _this.lock = false;
            _this.router.navigate(['/estate-plan']);
        }, function () {
            _this.lock = false;
        });
    };
    AssignBeneficiariesPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _core_services__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] },
        { type: _core_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_6__["BeneficiariesService"] }
    ]; };
    AssignBeneficiariesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-assign-beneficiaries-page',
            template: __webpack_require__(/*! raw-loader!./assign-beneficiaries-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.html"),
            styles: [__webpack_require__(/*! ./assign-beneficiaries-page.component.scss */ "./src/app/features/estate-plan/pages/assign-beneficiaries-page/assign-beneficiaries-page.component.scss")]
        })
    ], AssignBeneficiariesPageComponent);
    return AssignBeneficiariesPageComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estate-plan {\n  margin: 0 35px 50px;\n  padding: 1px 0 20px 0;\n}\n@media only screen and (max-device-width: 998px) {\n  .estate-plan {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n.profile {\n  flex-shrink: 0;\n  width: 285px;\n  margin: 0 30px 0 0;\n  order: 1;\n}\n@media only screen and (max-device-width: 998px) {\n  .profile {\n    order: 2;\n    width: 100%;\n    margin: 0;\n  }\n}\n.avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #ccc;\n}\n@media only screen and (max-device-width: 998px) {\n  .mobile {\n    flex-direction: column;\n  }\n}\n.assets {\n  width: calc(100% - 315px);\n  padding: 15px 20px;\n  order: 2;\n}\n@media only screen and (max-device-width: 998px) {\n  .assets {\n    width: 100%;\n    order: 1;\n    margin: 0 0 40px 0;\n  }\n}\n.table-wrap {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n@media only screen and (max-device-width: 1305px) {\n  .table {\n    margin: 0 !important;\n  }\n}\n@media only screen and (max-device-width: 998px) {\n  .table {\n    min-width: 998px;\n  }\n}\n.header {\n  margin: 0px 0 3px 0;\n}\n@media only screen and (max-device-width: 1305px) {\n  .header {\n    flex-direction: column;\n  }\n}\n.header__status {\n  margin: 0;\n  font-family: Barlow;\n  font-size: 19px;\n  font-weight: 500;\n  line-height: 24px;\n  color: #464646;\n}\n.header__status--style {\n  font-weight: 600;\n  color: green;\n}\n.header__status--style.incomplete {\n  font-weight: 600;\n  color: red;\n}\n.header__update-date {\n  margin: 0;\n  line-height: 28px;\n}\n@media only screen and (max-device-width: 1305px) {\n  .header__update-date {\n    margin: 20px 0;\n  }\n}\n.header__message {\n  margin: 0;\n  color: #888;\n  font-size: 11px;\n  font-style: italic;\n}\n.controls {\n  list-style: none;\n  padding: 0;\n}\n.controls__item:not(:first-child):not(:last-child) {\n  position: relative;\n  margin: 0 0 0px 20px;\n}\n.controls__item:not(:last-child):not(:first-child):after {\n  content: \"\";\n  position: absolute;\n  top: 6px;\n  left: -11px;\n  width: 2px;\n  height: 10px;\n  background: #844a57;\n}\n.controls__item.controls__item--printer {\n  margin-left: 20px;\n}\n.empty-state {\n  text-align: center;\n  padding: 30px;\n  color: #666;\n}\n.asset__beneficiaries {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.asset__notes {\n  max-width: 250px;\n}\n.beneficiaries__item {\n  position: relative;\n}\n.beneficiaries__priority {\n  position: absolute;\n  padding-bottom: 2px;\n  top: 1px;\n  left: 29px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background: #7e4753;\n  color: #eee;\n  font-size: 10px;\n  z-index: 1;\n}\n.icon-ep {\n  font-size: 19px;\n  color: #7f4954;\n}\n.icon__edit {\n  font-size: 15px;\n  margin: 4px 0 0 0;\n}\n.icon__delete {\n  font-size: 17px;\n}\n.beneficiaries__item:not(:last-child) {\n  margin: 0 10px 0 0;\n}\n.asset__beneficiaries-empty {\n  margin: 0;\n  color: #999;\n  font-size: 12px;\n  min-width: 140px;\n}\n.clr-btn--asset:not(:last-child) {\n  margin: 0 5px 0 0;\n}\n.asset__url {\n  color: #844a57;\n}\n.asset__url:hover {\n  text-decoration: underline;\n}\n.side-effect {\n  height: 300px;\n  width: 100%;\n}\n.title-h1--style {\n  margin: 30px 0;\n  color: black;\n  text-align: center;\n}\n.table__body-row--index {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvZXN0YXRlLXBsYW4tcGFnZS9lc3RhdGUtcGxhbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9wYWdlcy9lc3RhdGUtcGxhbi1wYWdlL2VzdGF0ZS1wbGFuLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDQUY7QURFRTtFQUpGO0lBTUksY0FBQTtJQUNBLGVBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0FGO0FERUU7RUFORjtJQVFJLFFBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FGO0FESUU7RUFERjtJQUdJLHNCQUFBO0VDREY7QUFDRjtBREtBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNGRjtBRElFO0VBTEY7SUFPSSxXQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FETUU7RUFERjtJQUdJLG9CQUFBO0VDSEY7QUFDRjtBRElFO0VBTEY7SUFPSSxnQkFBQTtFQ0ZGO0FBQ0Y7QURNQTtFQUNFLG1CQUFBO0FDSEY7QURLRTtFQUhGO0lBS0ksc0JBQUE7RUNIRjtBQUNGO0FETUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0hGO0FET0E7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE1FO0VBSkY7SUFNSSxjQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTEY7QURRQTtFQUNFLGlCQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNMRjtBRFFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNMRjtBRFFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7QUNMRjtBRFFBO0VBQ0UsY0FBQTtBQ0xGO0FETUU7RUFDRSwwQkFBQTtBQ0pKO0FEU0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ05GO0FEVUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUEY7QURVQTtFQUNFLGVBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2VzdGF0ZS1wbGFuL3BhZ2VzL2VzdGF0ZS1wbGFuLXBhZ2UvZXN0YXRlLXBsYW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2Vcbi5lc3RhdGUtcGxhbiB7XG4gIG1hcmdpbjogMCAzNXB4IDUwcHg7XG4gIHBhZGRpbmc6IDFweCAwIDIwcHggMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG4ucHJvZmlsZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMjg1cHg7XG4gIG1hcmdpbjogMCAzMHB4IDAgMDtcbiAgb3JkZXI6IDE7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgICAvLyBtb2JpbGVcbiAgICBvcmRlcjogMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLm1vYmlsZSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gICAgLy8gbW9iaWxlXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4vLyBhc3NldHNcbi5hc3NldHMge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzE1cHgpO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIG9yZGVyOiAyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gICAgLy8gbW9iaWxlXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3JkZXI6IDE7XG4gICAgbWFyZ2luOiAwIDAgNDBweCAwO1xuICB9XG59XG5cbi50YWJsZS13cmFwIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4udGFibGUge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMzA1cHgpIHtcbiAgICAvLyBtb2JpbGVcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIG1pbi13aWR0aDogOTk4cHg7XG4gIH1cbn1cblxuLy8gIGFzc2V0IHRhYmxlIGhlYWRlclxuLmhlYWRlciB7XG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTMwNXB4KSB7XG4gICAgLy8gbW9iaWxlXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uaGVhZGVyX19zdGF0dXMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBCYXJsb3c7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjNDY0NjQ2O1xufVxuXG4uaGVhZGVyX19zdGF0dXMtLXN0eWxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uaGVhZGVyX19zdGF0dXMtLXN0eWxlLmluY29tcGxldGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmVkO1xufVxuXG5cbi5oZWFkZXJfX3VwZGF0ZS1kYXRlIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMzA1cHgpIHtcbiAgICAvLyBtb2JpbGVcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxufVxuXG4uaGVhZGVyX19tZXNzYWdlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIGNvbnRyb2xzIGJ1dHRvbnNcbi5jb250cm9scyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250cm9sc19faXRlbTpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMCAwcHggMjBweDtcbn1cblxuLmNvbnRyb2xzX19pdGVtOm5vdCg6bGFzdC1jaGlsZCk6bm90KDpmaXJzdC1jaGlsZCk6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogLTExcHg7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogIzg0NGE1Nztcbn1cblxuLmNvbnRyb2xzX19pdGVtLmNvbnRyb2xzX19pdGVtLS1wcmludGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5hc3NldF9fYmVuZWZpY2lhcmllcyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmFzc2V0X19ub3RlcyB7XG4gIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi5iZW5lZmljaWFyaWVzX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmVuZWZpY2lhcmllc19fcHJpb3JpdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAyOXB4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM3ZTQ3NTM7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5pY29uLWVwIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogIzdmNDk1NDtcbn1cblxuLmljb25fX2VkaXQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogNHB4IDAgMCAwO1xufVxuXG4uaWNvbl9fZGVsZXRlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uYmVuZWZpY2lhcmllc19faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufVxuXG4uYXNzZXRfX2JlbmVmaWNpYXJpZXMtZW1wdHkge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG59XG5cbi5jbHItYnRuLS1hc3NldDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDVweCAwIDA7XG59XG5cbi5hc3NldF9fdXJsIHtcbiAgY29sb3I6ICM4NDRhNTc7XG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi8vIG90aGVyXG4uc2lkZS1lZmZlY3Qge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gbW9kaWZpY2F0aW9uc1xuLnRpdGxlLWgxLS1zdHlsZSB7XG4gIG1hcmdpbjogMzBweCAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYmxlX19ib2R5LXJvdy0taW5kZXgge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIuZXN0YXRlLXBsYW4ge1xuICBtYXJnaW46IDAgMzVweCA1MHB4O1xuICBwYWRkaW5nOiAxcHggMCAyMHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAuZXN0YXRlLXBsYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG4ucHJvZmlsZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMjg1cHg7XG4gIG1hcmdpbjogMCAzMHB4IDAgMDtcbiAgb3JkZXI6IDE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAucHJvZmlsZSB7XG4gICAgb3JkZXI6IDI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gIC5tb2JpbGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmFzc2V0cyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMTVweCk7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgb3JkZXI6IDI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAuYXNzZXRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcmRlcjogMTtcbiAgICBtYXJnaW46IDAgMCA0MHB4IDA7XG4gIH1cbn1cblxuLnRhYmxlLXdyYXAge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEzMDVweCkge1xuICAudGFibGUge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAudGFibGUge1xuICAgIG1pbi13aWR0aDogOTk4cHg7XG4gIH1cbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbjogMHB4IDAgM3B4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMzA1cHgpIHtcbiAgLmhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uaGVhZGVyX19zdGF0dXMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBCYXJsb3c7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjNDY0NjQ2O1xufVxuXG4uaGVhZGVyX19zdGF0dXMtLXN0eWxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uaGVhZGVyX19zdGF0dXMtLXN0eWxlLmluY29tcGxldGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmVkO1xufVxuXG4uaGVhZGVyX191cGRhdGUtZGF0ZSB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMzA1cHgpIHtcbiAgLmhlYWRlcl9fdXBkYXRlLWRhdGUge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG59XG5cbi5oZWFkZXJfX21lc3NhZ2Uge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNvbnRyb2xzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRyb2xzX19pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDBweCAyMHB4O1xufVxuXG4uY29udHJvbHNfX2l0ZW06bm90KDpsYXN0LWNoaWxkKTpub3QoOmZpcnN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IC0xMXB4O1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM4NDRhNTc7XG59XG5cbi5jb250cm9sc19faXRlbS5jb250cm9sc19faXRlbS0tcHJpbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uYXNzZXRfX2JlbmVmaWNpYXJpZXMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5hc3NldF9fbm90ZXMge1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4uYmVuZWZpY2lhcmllc19faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJlbmVmaWNpYXJpZXNfX3ByaW9yaXR5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICB0b3A6IDFweDtcbiAgbGVmdDogMjlweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjN2U0NzUzO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uaWNvbi1lcCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICM3ZjQ5NTQ7XG59XG5cbi5pY29uX19lZGl0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDRweCAwIDAgMDtcbn1cblxuLmljb25fX2RlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmJlbmVmaWNpYXJpZXNfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cblxuLmFzc2V0X19iZW5lZmljaWFyaWVzLWVtcHR5IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtaW4td2lkdGg6IDE0MHB4O1xufVxuXG4uY2xyLWJ0bi0tYXNzZXQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbjogMCA1cHggMCAwO1xufVxuXG4uYXNzZXRfX3VybCB7XG4gIGNvbG9yOiAjODQ0YTU3O1xufVxuLmFzc2V0X191cmw6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnNpZGUtZWZmZWN0IHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZS1oMS0tc3R5bGUge1xuICBtYXJnaW46IDMwcHggMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJsZV9fYm9keS1yb3ctLWluZGV4IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EstatePlanPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstatePlanPageComponent", function() { return EstatePlanPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_helpers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/helpers.service */ "./src/app/core/services/helpers.service.ts");
/* harmony import */ var _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/accounts.service */ "./src/app/core/services/accounts.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _popups_add_accounts_popup_add_accounts_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../popups/add-accounts-popup/add-accounts-popup.component */ "./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.ts");

// 3rd party libs





// services



// components

var EstatePlanPageComponent = /** @class */ (function () {
    function EstatePlanPageComponent(helpers, accountsService, toasterService, router, dialog) {
        this.helpers = helpers;
        this.accountsService = accountsService;
        this.toasterService = toasterService;
        this.router = router;
        this.dialog = dialog;
        this.lock = false;
        this.loading = true;
        this.tableTitles = ['#', 'Drawer', 'Account Name', 'Account User ID', 'URL', 'Notes', 'Beneficiaries', 'Actions'];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * helpers
         */
        this.keepOrder = function (a, b) {
            return a;
        };
        this.estatePlan = this.accountsService.estatePlan;
    }
    EstatePlanPageComponent.prototype.ngOnInit = function () {
        this.getEstatePlan();
    };
    EstatePlanPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * get estate plan assets list
     */
    EstatePlanPageComponent.prototype.getEstatePlan = function () {
        var _this = this;
        this.accountsService.getAccounts(true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            var accounts = _this.convertToEstatePlanTable(response.data.assets);
            console.log(accounts);
            _this.estatePlan.setAccounts(accounts);
            _this.estatePlan.setEstatePlanData(response.data.isComplete, response.data.lastUpdatedDate);
            _this.loading = false;
        });
    };
    /**
     * table buttons controls
     */
    EstatePlanPageComponent.prototype.newAsset = function () {
        this.router.navigate(['/estate-plan/new']);
    };
    /**
     * redirect to the edit account page
     */
    EstatePlanPageComponent.prototype.editAsset = function (id) {
        this.router.navigate(["/estate-plan/edit/" + id]);
    };
    /**
     * redirect to assign beneficiaries to the bulk accounts page
     */
    EstatePlanPageComponent.prototype.assignBeneficiaries = function () {
        this.router.navigate(["/estate-plan/assign-beneficiaries"]);
    };
    /**
     * Remove account from estate plan list
     */
    EstatePlanPageComponent.prototype.deleteAsset = function (accountId) {
        var _this = this;
        var isRemoveAccount = confirm("Account will be removed from Estate Plan. However, this Account will still remain in your portfolio and can be added back");
        if (!isRemoveAccount)
            return;
        this.lock = true;
        this.accountsService.removeAccount(accountId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.estatePlan.setEstatePlanData(response.data.isComplete);
            _this.estatePlan.removeAccount(accountId);
            _this.lock = false;
            _this.toasterService.showSuccess('Account has been removed from estate plan list successfully');
        });
    };
    /**
     * show popup with all accounts witch not belong to estate plan
     */
    EstatePlanPageComponent.prototype.addAccounts = function () {
        this.dialog.open(_popups_add_accounts_popup_add_accounts_popup_component__WEBPACK_IMPORTED_MODULE_9__["AddAccountsPopupComponent"], {
            panelClass: "popup-screen",
            disableClose: true,
            width: "600px",
            autoFocus: false
        });
    };
    EstatePlanPageComponent.prototype.printInfo = function () {
        alert('Coming soon');
    };
    /**
     * convert data to estate plan form data
     */
    EstatePlanPageComponent.prototype.convertToEstatePlanTable = function (accounts) {
        return accounts.map(function (value) {
            var asset_unique_id = value.asset_unique_id, asset_account_num = value.asset_account_num, asset_group_title = value.asset_group_title, asset_title = value.asset_title, asset_url = value.asset_url, asset_notes = value.asset_notes, beneficiaries = value.beneficiaries;
            return {
                asset_unique_id: asset_unique_id,
                asset_group_title: asset_group_title,
                // image: '',
                asset_title: asset_title,
                asset_account_num: asset_account_num,
                asset_url: asset_url,
                asset_notes: asset_notes,
                beneficiaries: beneficiaries
            };
        });
    };
    EstatePlanPageComponent.ctorParameters = function () { return [
        { type: _core_services_helpers_service__WEBPACK_IMPORTED_MODULE_6__["HelpersService"] },
        { type: _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_7__["AccountsService"] },
        { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    EstatePlanPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estate-plan-page',
            template: __webpack_require__(/*! raw-loader!./estate-plan-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.html"),
            styles: [__webpack_require__(/*! ./estate-plan-page.component.scss */ "./src/app/features/estate-plan/pages/estate-plan-page/estate-plan-page.component.scss")]
        })
    ], EstatePlanPageComponent);
    return EstatePlanPageComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile__header {\n  margin: 0 0 20px 0;\n}\n\n.clr-input {\n  padding: 6px 10px;\n}\n\n.input__label {\n  margin: 0 0 5px 0;\n  font-size: 13px;\n  line-height: 13px;\n}\n\n.clr-checkbox__label {\n  font-size: 13px;\n}\n\n.clr-checkbox__box {\n  margin-top: 6px;\n}\n\n.input__block--width {\n  width: 48%;\n}\n\n.input__block--country {\n  width: 68%;\n}\n\n.input__block--zip {\n  width: 28%;\n}\n\n.clr-btn {\n  padding: 4px 0;\n  min-width: 65px;\n}\n\n.clr-btn--line {\n  font-size: 14px;\n  color: #7e4753;\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvZXN0YXRlLXBsYW4tcGFnZS91c2VyLXByb2ZpbGUtYmxvY2svZWRpdC11c2VyLXByb2ZpbGUvZWRpdC11c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2VzdGF0ZS1wbGFuL3BhZ2VzL2VzdGF0ZS1wbGFuLXBhZ2UvdXNlci1wcm9maWxlLWJsb2NrL2VkaXQtdXNlci1wcm9maWxlL2VkaXQtdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9wYWdlcy9lc3RhdGUtcGxhbi1wYWdlL3VzZXItcHJvZmlsZS1ibG9jay9lZGl0LXVzZXItcHJvZmlsZS9lZGl0LXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX19oZWFkZXIge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5cbi8vIG1vZGlmaWNhdGlvbnNcbi5jbHItaW5wdXQge1xuICBwYWRkaW5nOiA2cHggMTBweDtcbn1cblxuLmlucHV0X19sYWJlbCB7XG4gIG1hcmdpbjogMCAwIDVweCAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuXG4uY2xyLWNoZWNrYm94X19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNsci1jaGVja2JveF9fYm94IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uaW5wdXRfX2Jsb2NrLS13aWR0aCB7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi5pbnB1dF9fYmxvY2stLWNvdW50cnkge1xuICB3aWR0aDogNjglO1xufVxuXG4uaW5wdXRfX2Jsb2NrLS16aXAge1xuICB3aWR0aDogMjglO1xufVxuXG4uY2xyLWJ0biB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBtaW4td2lkdGg6IDY1cHg7XG59XG5cbi5jbHItYnRuLS1saW5lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzdlNDc1MztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iLCIucHJvZmlsZV9faGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4uY2xyLWlucHV0IHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG59XG5cbi5pbnB1dF9fbGFiZWwge1xuICBtYXJnaW46IDAgMCA1cHggMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLmNsci1jaGVja2JveF9fbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jbHItY2hlY2tib3hfX2JveCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmlucHV0X19ibG9jay0td2lkdGgge1xuICB3aWR0aDogNDglO1xufVxuXG4uaW5wdXRfX2Jsb2NrLS1jb3VudHJ5IHtcbiAgd2lkdGg6IDY4JTtcbn1cblxuLmlucHV0X19ibG9jay0temlwIHtcbiAgd2lkdGg6IDI4JTtcbn1cblxuLmNsci1idG4ge1xuICBwYWRkaW5nOiA0cHggMDtcbiAgbWluLXdpZHRoOiA2NXB4O1xufVxuXG4uY2xyLWJ0bi0tbGluZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3ZTQ3NTM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: EditUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfileComponent", function() { return EditUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/services/profile.service */ "./src/app/core/services/profile.service.ts");
/* harmony import */ var _popups_terms_conditions_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../popups/terms-conditions-popup/terms-conditions-popup.component */ "./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.ts");






// components


var EditUserProfileComponent = /** @class */ (function () {
    function EditUserProfileComponent(fb, profileService, dialog) {
        this.fb = fb;
        this.profileService = profileService;
        this.dialog = dialog;
        this.states = [];
        this.countries = [];
        this.saveUserProfileEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.zipPattern = "^[0-9]{5}(-[0-9]{4})?$";
    }
    EditUserProfileComponent.prototype.ngOnInit = function () {
        if (this.userProfile) {
            this.createProfileForm();
        }
        this.getCountries();
    };
    EditUserProfileComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * get countries list from API
     */
    EditUserProfileComponent.prototype.getCountries = function () {
        var _this = this;
        this.profileService.getCountries()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (counties) {
            _this.countries = counties.data;
            if (_this.userProfile.user_country.id) {
                _this.getStates(+_this.userProfile.user_country.id, +_this.userProfile.user_state.id);
                _this.profileForm.get('user_country').setValue(+_this.userProfile.user_country.id, { emitEvent: false });
            }
        });
    };
    /**
     * get states list from API
     */
    EditUserProfileComponent.prototype.getStates = function (countryId, value) {
        var _this = this;
        this.profileService.getStates(countryId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (counties) {
            _this.states = counties.data;
            _this.profileForm.get('user_state').setValue(value);
        });
    };
    /**
     * create user profile form
     */
    EditUserProfileComponent.prototype.createProfileForm = function () {
        var _this = this;
        var reg = /^(\d{3})-?(\d{3})-?(\d{4})/;
        // const  zipPattern = "^[0-9]{5}(-[0-9]{4})?$";
        delete this.userProfile.isEncrypted;
        delete this.userProfile.onboard_complete;
        delete this.userProfile.tartuphelpenabled;
        delete this.userProfile.id;
        delete this.userProfile.startuphelpenabled;
        console.log(this.userProfile);
        this.profileForm = this.fb.group(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.userProfile, { user_country: [this.userProfile.user_country, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], user_state: [this.userProfile.user_state, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], user_zip_code: [this.userProfile.user_zip_code, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], user_phone1: [this.userProfile.user_phone1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(reg)], user_phone2: [this.userProfile.user_phone2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(reg)], estatePlanTC: this.userProfile.estatePlanTC === 'NO' ? false : true }));
        /**
         * load list of states if country was changed
         */
        this.profileForm.get('user_country').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (countryId) {
            if (countryId == 1) {
                _this.zipPattern = "^[0-9]{5}(-[0-9]{4})?$";
            }
            else if (countryId == 2) {
                _this.zipPattern = "^([A-Z][0-9][A-Z] ?[0-9][A-Z][0-9])$";
            }
            else if (countryId == 3) {
                _this.zipPattern = "^[1-9][0-9]{5}$";
            }
            else if (countryId == 4) {
                _this.zipPattern = "^[0-9]{4}$";
            }
            else {
                _this.zipPattern = "^[a-zA-Z0-9_]*$";
            }
            _this.getStates(countryId, null);
        });
    };
    /**
     * change edit mode to user profile
     */
    EditUserProfileComponent.prototype.saveUserProfile = function () {
        console.log(this.profileForm.value.user_phone1);
        console.log(this.profileForm.valid);
        var fieldsForSaving = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.profileForm.value);
        fieldsForSaving.user_country = this.countries.find(function (country) { return country.id === fieldsForSaving.user_country; });
        fieldsForSaving.user_state = this.states.find(function (state) { return state.id === fieldsForSaving.user_state; });
        this.saveUserProfileEvent.next(fieldsForSaving);
    };
    /**
     * show terms and conditions popup
     */
    EditUserProfileComponent.prototype.showTermsConditions = function () {
        this.dialog.open(_popups_terms_conditions_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_7__["TermsConditionsPopupComponent"], {
            panelClass: "popup-screen",
            disableClose: true,
            width: "1200px",
            autoFocus: false
        });
    };
    EditUserProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditUserProfileComponent.prototype, "userProfile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], EditUserProfileComponent.prototype, "saveUserProfileEvent", void 0);
    EditUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-user-profile',
            template: __webpack_require__(/*! raw-loader!./edit-user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./edit-user-profile.component.scss */ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/edit-user-profile/edit-user-profile.component.scss")]
        })
    ], EditUserProfileComponent);
    return EditUserProfileComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-profile {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  border-radius: 2px;\n  background: #844a58;\n}\n\n.user-profile--edit {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvZXN0YXRlLXBsYW4tcGFnZS91c2VyLXByb2ZpbGUtYmxvY2svdXNlci1wcm9maWxlLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9wYWdlcy9lc3RhdGUtcGxhbi1wYWdlL3VzZXItcHJvZmlsZS1ibG9jay91c2VyLXByb2ZpbGUtYmxvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvZXN0YXRlLXBsYW4tcGFnZS91c2VyLXByb2ZpbGUtYmxvY2svdXNlci1wcm9maWxlLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjODQ0YTU4O1xufVxuXG4udXNlci1wcm9maWxlLS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn0iLCIudXNlci1wcm9maWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICM4NDRhNTg7XG59XG5cbi51c2VyLXByb2ZpbGUtLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: UserProfileBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileBlockComponent", function() { return UserProfileBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _core_services_estate_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/estate-plan.service */ "./src/app/core/services/estate-plan.service.ts");
/* harmony import */ var _core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../core/services/profile.service */ "./src/app/core/services/profile.service.ts");




// services



var UserProfileBlockComponent = /** @class */ (function () {
    function UserProfileBlockComponent(authService, profileService, estatePlanService) {
        this.authService = authService;
        this.profileService = profileService;
        this.estatePlanService = estatePlanService;
        this.isEditUser = false;
        this.lock = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UserProfileBlockComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    UserProfileBlockComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * get user profile method
     */
    UserProfileBlockComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.userProfile$ = this.authService.getUserProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            _this.userProfile = value.data;
            return value;
        }));
    };
    /**
     * save user profile
     */
    UserProfileBlockComponent.prototype.saveUserProfile = function (userProfile) {
        var _this = this;
        this.lock = true;
        var currentUserProfile = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, userProfile, { estatePlanTC: userProfile.estatePlanTC ? 'YES' : 'NO' });
        this.profileService.updateUserProfile(currentUserProfile)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function () {
            _this.lock = false;
            _this.isEditUser = !_this.isEditUser;
            _this.userProfile = currentUserProfile;
            console.log(_this.userProfile, 'on save');
        }, function () {
            _this.lock = false;
        });
    };
    UserProfileBlockComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
        { type: _core_services_estate_plan_service__WEBPACK_IMPORTED_MODULE_5__["EstatePlanService"] }
    ]; };
    UserProfileBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-profile-block',
            template: __webpack_require__(/*! raw-loader!./user-profile-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-block.component.scss */ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile-block.component.scss")]
        })
    ], UserProfileBlockComponent);
    return UserProfileBlockComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile__header {\n  margin: 0 0 20px 0;\n}\n\n.avatar {\n  margin: 0 0 20px 0;\n}\n\n.profile {\n  margin: 0 0 20px 0;\n}\n\n.profile--phone {\n  width: 50%;\n}\n\n.profile__key {\n  margin: 0;\n  font-family: Barlow;\n  font-weight: 600;\n  color: #eee;\n  font-size: 13px;\n  line-height: 15px;\n}\n\n.profile__value {\n  font-family: Barlow;\n  color: #FFF;\n  font-size: 13px;\n  line-height: 16px;\n  margin: 0;\n}\n\n.profile__value--empty {\n  color: #a29292;\n  font-style: italic;\n}\n\n.checkbox__box {\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin: 4px 10px 0 0;\n  border: 2px solid #eee;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n\n.checkbox__box.checked {\n  background: url(\"data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==\") 3px 3px no-repeat;\n}\n\n.checkbox__title {\n  line-height: 20px;\n}\n\n.clr-btn--line {\n  color: #FFF;\n  font-size: 13px;\n  display: inline-block;\n  text-decoration: underline;\n}\n\n.profile__value--indent {\n  margin: 0;\n}\n\n.title-h2 {\n  color: #eee;\n}\n\n.clr-btn-border {\n  padding: 4px 0;\n  min-width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvZXN0YXRlLXBsYW4tcGFnZS91c2VyLXByb2ZpbGUtYmxvY2svdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvZXN0YXRlLXBsYW4tcGFnZS91c2VyLXByb2ZpbGUtYmxvY2svdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSwrSUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2VzdGF0ZS1wbGFuL3BhZ2VzL2VzdGF0ZS1wbGFuLXBhZ2UvdXNlci1wcm9maWxlLWJsb2NrL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZV9faGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4uYXZhdGFyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4ucHJvZmlsZSB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbn1cblxuLnByb2ZpbGUtLXBob25lIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnByb2ZpbGVfX2tleSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEJhcmxvdztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5wcm9maWxlX192YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBCYXJsb3c7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9maWxlX192YWx1ZS0tZW1wdHkge1xuICBjb2xvcjogI2EyOTI5MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY2hlY2tib3hfX2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAxMHB4IDAgMDtcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmNoZWNrYm94X19ib3guY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEN3QUtBSUFCQVAvLy8vM2NuU0g1QkFFS0FBRUFMQUFBQUFBTEFBb0FBQUlVakgrQUM3M1dISXN3MFVDamdscmFPMjBQTmhZQU93PT1cIikgM3B4IDNweCBuby1yZXBlYXQ7XG59XG5cbi5jaGVja2JveF9fdGl0bGUge1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmNsci1idG4tLWxpbmUge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvZmlsZV9fdmFsdWUtLWluZGVudCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8gbW9kaWZpY2F0aW9uc1xuLnRpdGxlLWgyIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5jbHItYnRuLWJvcmRlciB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBtaW4td2lkdGg6IDY1cHg7XG59XG4iLCIucHJvZmlsZV9faGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4uYXZhdGFyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4ucHJvZmlsZSB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbn1cblxuLnByb2ZpbGUtLXBob25lIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnByb2ZpbGVfX2tleSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEJhcmxvdztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5wcm9maWxlX192YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBCYXJsb3c7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9maWxlX192YWx1ZS0tZW1wdHkge1xuICBjb2xvcjogI2EyOTI5MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY2hlY2tib3hfX2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAxMHB4IDAgMDtcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmNoZWNrYm94X19ib3guY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEN3QUtBSUFCQVAvLy8vM2NuU0g1QkFFS0FBRUFMQUFBQUFBTEFBb0FBQUlVakgrQUM3M1dISXN3MFVDamdscmFPMjBQTmhZQU93PT1cIikgM3B4IDNweCBuby1yZXBlYXQ7XG59XG5cbi5jaGVja2JveF9fdGl0bGUge1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmNsci1idG4tLWxpbmUge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvZmlsZV9fdmFsdWUtLWluZGVudCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdGxlLWgyIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5jbHItYnRuLWJvcmRlciB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBtaW4td2lkdGg6IDY1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _popups_terms_conditions_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../popups/terms-conditions-popup/terms-conditions-popup.component */ "./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.ts");
/* harmony import */ var _core_services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/services/helpers.service */ "./src/app/core/services/helpers.service.ts");



// components

// services

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(helpers, dialog) {
        this.helpers = helpers;
        this.dialog = dialog;
        this.editProfileEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        if (this.userProfile.profile_pic == null || this.userProfile.profile_pic == undefined || this.userProfile.profile_pic.trim() == '') {
            this.profileImageUrl = './../../../../../../../assets/images/round-img.png';
        }
        else {
            this.profileImageUrl = 'https://s3.amazonaws.com/' + this.userProfile.profile_pic;
        }
    };
    /**
     * change user profile view to edit mode
     */
    UserProfileComponent.prototype.editProfile = function () {
        this.editProfileEvent.next();
    };
    /**
     * show terms and conditions popup
     */
    UserProfileComponent.prototype.showTermsConditions = function () {
        this.dialog.open(_popups_terms_conditions_popup_terms_conditions_popup_component__WEBPACK_IMPORTED_MODULE_3__["TermsConditionsPopupComponent"], {
            panelClass: "popup-screen",
            disableClose: true,
            width: "1200px",
            autoFocus: false
        });
    };
    /**
     * check if fields  is empty
     */
    UserProfileComponent.prototype.addressLines = function (fields) {
        var string = '';
        fields.forEach(function (item, index) {
            if (item && item.length > 0) {
                string = string + (item + (fields.length - 1 === index ? '' : ', '));
            }
        });
        return string;
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _core_services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UserProfileComponent.prototype, "userProfile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], UserProfileComponent.prototype, "editProfileEvent", void 0);
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/features/estate-plan/pages/estate-plan-page/user-profile-block/user-profile/user-profile.component.scss")]
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n\n.header {\n  min-height: 40px;\n}\n\n.list {\n  margin: 20px 0 20px 0;\n  padding: 0;\n  list-style: none;\n}\n\n.list__item {\n  position: relative;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  padding: 10px 10px 10px 30px;\n}\n\n.list__item:not(:last-child) {\n  margin: 0 0 10px 0;\n}\n\n.info__key {\n  margin: 0 0 0 10px;\n}\n\n@media only screen and (max-device-width: 998px) {\n  .info__key {\n    overflow: hidden;\n    width: 130px;\n    display: inline-block;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.index {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 25px;\n  height: 25px;\n  border-radius: 5px 0 5px 0;\n  background: #7e4753;\n  color: #eee;\n}\n\n.footer {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.item {\n  padding: 20px 10px 20px 20px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.controls {\n  margin-left: auto;\n}\n\n.clr-btn--line {\n  margin: 0 5px;\n}\n\n.clr-btn--asset {\n  min-width: 140px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.list.cdk-drop-list-dragging .item:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvc2luZ2xlLWFzc2V0LXBhZ2UvYmVuZWZpY2lhcmllcy1ibG9jay9iZW5lZmljaWFyaWVzLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9wYWdlcy9zaW5nbGUtYXNzZXQtcGFnZS9iZW5lZmljaWFyaWVzLWJsb2NrL2JlbmVmaWNpYXJpZXMtYmxvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUhGO0lBS0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNFRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLHNEQUFBO0FDQUY7O0FER0E7RUFDRSxzREFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvc2luZ2xlLWFzc2V0LXBhZ2UvYmVuZWZpY2lhcmllcy1ibG9jay9iZW5lZmljaWFyaWVzLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxpc3RfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcbn1cblxuLmxpc3RfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLmluZm9fX2tleSB7XG4gIG1hcmdpbjogMCAwIDAgMTBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG5cbi5pbmRleCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCA1cHggMDtcbiAgYmFja2dyb3VuZDogIzdlNDc1MztcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uY2xyLWJ0bi0tbGluZSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5jbHItYnRuLS1hc3NldCB7XG4gIG1pbi13aWR0aDogMTQwcHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW06bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxpc3RfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcbn1cblxuLmxpc3RfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLmluZm9fX2tleSB7XG4gIG1hcmdpbjogMCAwIDAgMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gIC5pbmZvX19rZXkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG5cbi5pbmRleCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCA1cHggMDtcbiAgYmFja2dyb3VuZDogIzdlNDc1MztcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jbHItYnRuLS1saW5lIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmNsci1idG4tLWFzc2V0IHtcbiAgbWluLXdpZHRoOiAxNDBweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuaXRlbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BeneficiariesBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariesBlockComponent", function() { return BeneficiariesBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _core_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/beneficiaries.service */ "./src/app/core/services/beneficiaries.service.ts");
/* harmony import */ var _core_services_helpers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/helpers.service */ "./src/app/core/services/helpers.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _popups_add_beneficiaries_popup_add_beneficiaries_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../popups/add-beneficiaries-popup/add-beneficiaries-popup.component */ "./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.ts");

// 3rd party ibs





// services



// components

var BeneficiariesBlockComponent = /** @class */ (function () {
    function BeneficiariesBlockComponent(helpers, dialog, toasterService, beneficiariesService) {
        this.helpers = helpers;
        this.dialog = dialog;
        this.toasterService = toasterService;
        this.beneficiariesService = beneficiariesService;
        this.lock = false;
        this.beneficiaries = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.beneficiaries = this.beneficiariesService.beneficiaries;
    }
    BeneficiariesBlockComponent.prototype.ngOnInit = function () {
        if (this.accountId && +this.accountId === -1) {
            this.getBeneficiariesForAllAccounts();
            return;
        }
        if (this.accountId) {
            this.beneficiaries$ = this.getBeneficiaries();
        }
    };
    BeneficiariesBlockComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.beneficiaries.clearAll();
    };
    /**
     * init beneficiaries list for assign beneficiaries page
     */
    BeneficiariesBlockComponent.prototype.getBeneficiariesForAllAccounts = function () {
        this.beneficiaries$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([]);
        this.beneficiaries.setBeneficiaries([]);
    };
    /**
     * get all beneficiaries for current account
     */
    BeneficiariesBlockComponent.prototype.getBeneficiaries = function () {
        var _this = this;
        return this.beneficiariesService
            .getBeneficiariesByAccount(this.accountId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            _this.beneficiaries.setBeneficiaries(value.data);
            _this.amount = !!_this.beneficiaries.getBeneficiaries().length;
            return value.data;
        }));
    };
    /**
     * remove from local list of beneficiaries
     */
    BeneficiariesBlockComponent.prototype.removeFromList = function (caretakerId) {
        this.beneficiaries.removeBeneficiary(caretakerId);
    };
    /**
     * change beneficiaries order
     */
    BeneficiariesBlockComponent.prototype.changeOrder = function (event) {
        var currentList = this.beneficiaries.getBeneficiaries();
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(currentList, event.previousIndex, event.currentIndex);
        this.beneficiaries.setBeneficiaries(currentList);
    };
    /**
     * save list of beneficiaries
     */
    BeneficiariesBlockComponent.prototype.saveBeneficiaries = function () {
        var _this = this;
        this.lock = true;
        var forSaving = { beneficiaries: [] };
        var currentBeneficiaries = this.beneficiaries.getBeneficiaries();
        currentBeneficiaries.forEach(function (contact, index) {
            forSaving.beneficiaries.push({
                contactId: contact.user_caretaker_id,
                priority: index + 1
            });
        });
        this.beneficiariesService.updateBeneficiariesByAccount(this.accountId, forSaving)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function () {
            _this.lock = false;
            _this.toasterService.showSuccess('Beneficiaries has been updated');
        }, function () {
            _this.lock = false;
            _this.toasterService.showError('Something went wrong');
        });
    };
    /**
     * contacts list popup
     */
    BeneficiariesBlockComponent.prototype.addBeneficiaries = function () {
        this.dialog.open(_popups_add_beneficiaries_popup_add_beneficiaries_popup_component__WEBPACK_IMPORTED_MODULE_9__["AddBeneficiariesPopupComponent"], {
            panelClass: "popup-screen",
            disableClose: true,
            width: "600px",
            autoFocus: false
        });
    };
    BeneficiariesBlockComponent.ctorParameters = function () { return [
        { type: _core_services_helpers_service__WEBPACK_IMPORTED_MODULE_7__["HelpersService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
        { type: _core_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_6__["BeneficiariesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeneficiariesBlockComponent.prototype, "accountId", void 0);
    BeneficiariesBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-beneficiaries-block',
            template: __webpack_require__(/*! raw-loader!./beneficiaries-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.html"),
            styles: [__webpack_require__(/*! ./beneficiaries-block.component.scss */ "./src/app/features/estate-plan/pages/single-asset-page/beneficiaries-block/beneficiaries-block.component.scss")]
        })
    ], BeneficiariesBlockComponent);
    return BeneficiariesBlockComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 95%;\n  max-width: 1126px;\n  margin: 0 auto;\n  padding: 1px 0 20px 0;\n}\n@media only screen and (max-device-width: 998px) {\n  .main {\n    width: 100%;\n  }\n}\n.header {\n  position: relative;\n  margin: 20px 0;\n}\n@media only screen and (max-device-width: 998px) {\n  .main__inner {\n    flex-direction: column;\n  }\n}\n.title-h1--position {\n  color: #000;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media only screen and (max-device-width: 998px) {\n  .asset {\n    margin: 0 0 30px 0;\n  }\n}\n.asset,\n.beneficiaries {\n  width: 49%;\n  min-height: 300px;\n  padding: 20px;\n}\n@media only screen and (max-device-width: 998px) {\n  .asset,\n.beneficiaries {\n    width: 100%;\n  }\n}\n.form-header {\n  margin: 0 0 15px 0;\n  min-height: 40px;\n}\n.group-disclaimer {\n  margin: 0;\n  text-align: right;\n  color: #888;\n  font-style: italic;\n  font-size: 12px;\n}\n.clr-textarea {\n  height: 115px;\n}\n.typography-s {\n  font-size: 14px;\n  color: #000;\n}\n@media only screen and (max-device-width: 998px) {\n  .clr-btn-border {\n    padding: 4px 0;\n    min-width: 50px;\n    margin: 0 0 0 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcGFnZXMvc2luZ2xlLWFzc2V0LXBhZ2Uvc2luZ2xlLWFzc2V0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2VzdGF0ZS1wbGFuL3BhZ2VzL3NpbmdsZS1hc3NldC1wYWdlL3NpbmdsZS1hc3NldC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQU5GO0lBUUksV0FBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FER0U7RUFERjtJQUdJLHNCQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FESUU7RUFERjtJQUdJLGtCQUFBO0VDREY7QUFDRjtBRElBOztFQUVFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNERjtBREdFO0VBTkY7O0lBUUksV0FBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FESUE7RUFDRSxhQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDREY7QURLRTtFQURGO0lBR0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9wYWdlcy9zaW5nbGUtYXNzZXQtcGFnZS9zaW5nbGUtYXNzZXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWF4LXdpZHRoOiAxMTI2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcHggMCAyMHB4IDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgICAvLyBtb2JpbGVcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLm1haW5fX2lubmVyIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgICAvLyBtb2JpbGVcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi50aXRsZS1oMS0tcG9zaXRpb24ge1xuICBjb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmFzc2V0IHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgICAvLyBtb2JpbGVcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gIH1cbn1cblxuLmFzc2V0LFxuLmJlbmVmaWNpYXJpZXMge1xuICB3aWR0aDogNDklO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMjBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAgIC8vIG1vYmlsZVxuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLmdyb3VwLWRpc2NsYWltZXIge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8vIG90aGVyXG4uY2xyLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMTVweDtcbn1cblxuLnR5cG9ncmFwaHktcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jbHItYnRuLWJvcmRlciB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gICAgLy8gbW9iaWxlXG4gICAgcGFkZGluZzogNHB4IDA7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMCAwIDAgMTVweDtcbiAgfVxufSIsIi5tYWluIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWF4LXdpZHRoOiAxMTI2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcHggMCAyMHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAubWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gIC5tYWluX19pbm5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4udGl0bGUtaDEtLXBvc2l0aW9uIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk5OHB4KSB7XG4gIC5hc3NldCB7XG4gICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICB9XG59XG5cbi5hc3NldCxcbi5iZW5lZmljaWFyaWVzIHtcbiAgd2lkdGg6IDQ5JTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAuYXNzZXQsXG4uYmVuZWZpY2lhcmllcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uZ3JvdXAtZGlzY2xhaW1lciB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNsci10ZXh0YXJlYSB7XG4gIGhlaWdodDogMTE1cHg7XG59XG5cbi50eXBvZ3JhcGh5LXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OThweCkge1xuICAuY2xyLWJ0bi1ib3JkZXIge1xuICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDAgMCAwIDE1cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SingleAssetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleAssetPageComponent", function() { return SingleAssetPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_passwordHintService_passwordhint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/passwordHintService/passwordhint.service */ "./src/app/services/passwordHintService/passwordhint.service.ts");
/* harmony import */ var _services_assetService_asset_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/assetService/asset.service */ "./src/app/services/assetService/asset.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../core/services/accounts.service */ "./src/app/core/services/accounts.service.ts");
/* harmony import */ var _assets_static_data_staticText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../assets/static-data/staticText */ "./src/assets/static-data/staticText.ts");

// 3rd party libs





// services




// copy

var SingleAssetPageComponent = /** @class */ (function () {
    function SingleAssetPageComponent(assetService, accountsService, passwordHintService, toasterService, route, fb, router) {
        this.assetService = assetService;
        this.accountsService = accountsService;
        this.passwordHintService = passwordHintService;
        this.toasterService = toasterService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.initFormData$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"];
        this.lock = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.assetId = +this.route.snapshot.paramMap.get('id');
        this.staticText = _assets_static_data_staticText__WEBPACK_IMPORTED_MODULE_10__["staticText"];
    }
    SingleAssetPageComponent.prototype.ngOnInit = function () {
        this.getDataForForm();
    };
    SingleAssetPageComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * get all data for init form
     */
    SingleAssetPageComponent.prototype.getDataForForm = function () {
        var _this = this;
        var getPasswordHints = this.passwordHintService.getPasswordHints();
        var getAssetGroup = this.assetService.getDrawersGroup();
        var requests = [getPasswordHints, getAssetGroup];
        if (this.assetId) {
            var getAccount = this.accountsService.getAccount(this.assetId);
            requests.push(getAccount);
        }
        this.initFormData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            _this.passwordHints = response[0].data;
            _this.drawersGroup = response[1].data;
            _this.createAssetForm();
            if (response[2]) {
                _this.addUserToForm(response[2].data);
            }
            return response;
        }));
    };
    /**
     * create estate plan asset form
     */
    SingleAssetPageComponent.prototype.createAssetForm = function () {
        this.assetForm = this.fb.group({
            asset_title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            asset_group_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            asset_account_num: '',
            PasswordHint_id: null,
            asset_url: '',
            asset_notes: '',
            asset_location: '',
            asset_link_to_file: '',
            estatePlan: 'YES'
        });
        if (this.assetId) {
            this.assetForm.get('asset_group_id').disable();
        }
    };
    /**
     * update account form if we edit account
     * @param account single account data
     */
    SingleAssetPageComponent.prototype.addUserToForm = function (account) {
        this.assetForm.patchValue({
            asset_title: account.title,
            asset_notes: account.notes,
            asset_group_id: this.drawersGroup.find(function (hint) {
                return hint.ag_id === account.asset_group_id;
            }).ag_id,
            PasswordHint_id: account.passwordHintId === 0 ? null :
                this.passwordHints.find(function (hint) {
                    return hint.pwd_hint_id === account.passwordHintId;
                }).pwd_hint_id,
            asset_url: account.url,
            asset_account_num: account.accountNumber
        });
    };
    /**
     * back to the estate plan list
     */
    SingleAssetPageComponent.prototype.backToList = function () {
        this.router.navigate(['/estate-plan']);
    };
    /**
     * action on submit form button
     */
    SingleAssetPageComponent.prototype.submitForm = function (action) {
        if (action === void 0) { action = 'save'; }
        if (action === 'update') {
            this.updateAsset();
            return;
        }
        this.saveAsset();
    };
    /**
     * create new asset method
     */
    SingleAssetPageComponent.prototype.saveAsset = function () {
        var _this = this;
        this.lock = true;
        this.accountsService.createAccount(this.assetForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.router.navigate(['/estate-plan/edit/' + response.data.asset_unique_id]);
            _this.toasterService.showSuccess('Account has been created');
            _this.lock = false;
        }, function () {
            _this.toasterService.showError('Something went wrong');
            _this.lock = false;
        });
    };
    /**
     * update new asset method
     */
    SingleAssetPageComponent.prototype.updateAsset = function () {
        var _this = this;
        this.lock = true;
        this.accountsService.updateAccount(this.assetForm.value, this.assetId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function () {
            _this.toasterService.showSuccess('Account has been updated');
            _this.lock = false;
        }, function () {
            _this.toasterService.showSuccess('Something went wrong');
            _this.lock = false;
        });
    };
    SingleAssetPageComponent.ctorParameters = function () { return [
        { type: _services_assetService_asset_service__WEBPACK_IMPORTED_MODULE_7__["AssetService"] },
        { type: _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_9__["AccountsService"] },
        { type: _services_passwordHintService_passwordhint_service__WEBPACK_IMPORTED_MODULE_6__["PasswordHintService"] },
        { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SingleAssetPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'single-asset-page',
            template: __webpack_require__(/*! raw-loader!./single-asset-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.html"),
            styles: [__webpack_require__(/*! ./single-asset-page.component.scss */ "./src/app/features/estate-plan/pages/single-asset-page/single-asset-page.component.scss")]
        })
    ], SingleAssetPageComponent);
    return SingleAssetPageComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  height: 500px;\n  overflow: auto;\n  margin: 0 0 20px 0;\n  padding: 0;\n  list-style: none;\n}\n\n.list__item {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.list__item:not(:last-child) {\n  margin: 0 0 10px 0;\n}\n\n.clr-btn--beneficiaries {\n  width: 130px;\n}\n\n.input__label {\n  margin: 0;\n}\n\n.input__label--check-all {\n  margin: 4px 0 0 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcG9wdXBzL2FkZC1hY2NvdW50cy1wb3B1cC9hZGQtYWNjb3VudHMtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2VzdGF0ZS1wbGFuL3BvcHVwcy9hZGQtYWNjb3VudHMtcG9wdXAvYWRkLWFjY291bnRzLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcG9wdXBzL2FkZC1hY2NvdW50cy1wb3B1cC9hZGQtYWNjb3VudHMtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0X19pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlzdF9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4vLyBtb2RpZmljYXRpb25zXG4uY2xyLWJ0bi0tYmVuZWZpY2lhcmllcyB7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmlucHV0X19sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlucHV0X19sYWJlbC0tY2hlY2stYWxsIHtcbiAgbWFyZ2luOiA0cHggMCAwIDExcHg7XG59IiwiLmxpc3Qge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGlzdF9faXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxpc3RfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLmNsci1idG4tLWJlbmVmaWNpYXJpZXMge1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5pbnB1dF9fbGFiZWwge1xuICBtYXJnaW46IDA7XG59XG5cbi5pbnB1dF9fbGFiZWwtLWNoZWNrLWFsbCB7XG4gIG1hcmdpbjogNHB4IDAgMCAxMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddAccountsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountsPopupComponent", function() { return AddAccountsPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/accounts.service */ "./src/app/core/services/accounts.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/toaster.service */ "./src/app/services/toaster.service.ts");





// services


var AddAccountsPopupComponent = /** @class */ (function () {
    function AddAccountsPopupComponent(accountsService, toasterService, dialogRef) {
        this.accountsService = accountsService;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.lock = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.accounts = this.accountsService.accounts;
        this.estatePlan = this.accountsService.estatePlan;
    }
    AddAccountsPopupComponent.prototype.ngOnInit = function () { };
    AddAccountsPopupComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    AddAccountsPopupComponent.prototype.onChooseAll = function ($event) {
        this.chooseAllEvent.target.checked = false;
    };
    /**
     * add accounts to estate plan request to API
     */
    AddAccountsPopupComponent.prototype.addToEstatePlan = function () {
        var _this = this;
        this.lock = true;
        var forSaving = { accounts: [] };
        this.accounts.getCheckedAccounts().forEach(function (contact) {
            forSaving.accounts.push(contact.asset_unique_id);
        });
        this.accountsService.addAccountsToEstatePlan(forSaving)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.lock = false;
            _this.convertToEstatePlanFormat();
            console.log(response);
            _this.estatePlan.setEstatePlanData(response.data.isComplete);
            _this.toasterService.showSuccess('Accounts has been added to estate plan');
            _this.dialogRef.close();
        }, function () {
            _this.lock = false;
            _this.toasterService.showError('Something went wrong');
        });
    };
    /**
    * convert raw accounts array to appropriate format for estate table accounts table
    * and add these new accounts to estate plan table locally
    */
    AddAccountsPopupComponent.prototype.convertToEstatePlanFormat = function () {
        var accounts = this.accounts.getCheckedAccounts().map(function (value) {
            var asset_unique_id = value.asset_unique_id, asset_account_num = value.asset_account_num, asset_title = value.asset_title, asset_group_title = value.asset_group_title, asset_url = value.asset_url, asset_notes = value.asset_notes;
            return {
                asset_unique_id: asset_unique_id,
                asset_group_title: asset_group_title,
                asset_title: asset_title,
                asset_account_num: asset_account_num,
                asset_url: asset_url,
                asset_notes: asset_notes,
                beneficiaries: []
            };
        });
        this.estatePlan.concatAccounts(accounts);
    };
    AddAccountsPopupComponent.ctorParameters = function () { return [
        { type: _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] },
        { type: _services_toaster_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    AddAccountsPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-accounts-popup',
            template: __webpack_require__(/*! raw-loader!./add-accounts-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.html"),
            styles: [__webpack_require__(/*! ./add-accounts-popup.component.scss */ "./src/app/features/estate-plan/popups/add-accounts-popup/add-accounts-popup.component.scss")]
        })
    ], AddAccountsPopupComponent);
    return AddAccountsPopupComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  height: 500px;\n  overflow: auto;\n  margin: 0 0 20px 0;\n  padding: 0;\n  list-style: none;\n}\n\n.list__item {\n  border: 1px solid #eee;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.list__item:not(:last-child) {\n  margin: 0 0 10px 0;\n}\n\n.info__key {\n  margin: 0 0 0 10px;\n}\n\n@media only screen and (max-device-width: 998px) {\n  .info__key {\n    overflow: hidden;\n    width: 130px;\n    display: inline-block;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n.clr-btn--beneficiaries {\n  width: 130px;\n}\n\n.input__label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcG9wdXBzL2FkZC1iZW5lZmljaWFyaWVzLXBvcHVwL2FkZC1iZW5lZmljaWFyaWVzLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9wb3B1cHMvYWRkLWJlbmVmaWNpYXJpZXMtcG9wdXAvYWRkLWJlbmVmaWNpYXJpZXMtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFIRjtJQUtJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ0NGO0FBQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9lc3RhdGUtcGxhbi9wb3B1cHMvYWRkLWJlbmVmaWNpYXJpZXMtcG9wdXAvYWRkLWJlbmVmaWNpYXJpZXMtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0X19pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlzdF9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4uaW5mb19fa2V5IHtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgICAvLyBtb2JpbGVcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuXG4vLyBtb2RpZmljYXRpb25zXG4uY2xyLWJ0bi0tYmVuZWZpY2lhcmllcyB7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmlucHV0X19sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn0iLCIubGlzdCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0X19pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlzdF9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4uaW5mb19fa2V5IHtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogOTk4cHgpIHtcbiAgLmluZm9fX2tleSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cblxuLmNsci1idG4tLWJlbmVmaWNpYXJpZXMge1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5pbnB1dF9fbGFiZWwge1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AddBeneficiariesPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBeneficiariesPopupComponent", function() { return AddBeneficiariesPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_legalService_legal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/legalService/legal.service */ "./src/app/services/legalService/legal.service.ts");
/* harmony import */ var _core_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/beneficiaries.service */ "./src/app/core/services/beneficiaries.service.ts");
/* harmony import */ var _core_services_helpers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/helpers.service */ "./src/app/core/services/helpers.service.ts");





// services



var AddBeneficiariesPopupComponent = /** @class */ (function () {
    function AddBeneficiariesPopupComponent(helpers, fb, dialogRef, legalService, beneficiariesService) {
        this.helpers = helpers;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.legalService = legalService;
        this.beneficiariesService = beneficiariesService;
        this.newContacts = [];
        this.beneficiaries = this.beneficiariesService.beneficiaries;
    }
    AddBeneficiariesPopupComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    /**
     * get all contacts from API
     */
    AddBeneficiariesPopupComponent.prototype.getContacts = function () {
        var _this = this;
        this.contacts$ = this.legalService.getContacts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log(response.data);
            _this.contacts = response.data;
            console.log(_this.contacts);
            _this.createContactsForm();
            return response.data;
        }));
    };
    /**
     * create contacts form
     */
    AddBeneficiariesPopupComponent.prototype.createContactsForm = function () {
        this.contactsForm = this.fb.group({
            contacts: this.buildContacts()
        });
        if (this.newContacts.length === 5) {
            this.crossAmount(true);
        }
    };
    Object.defineProperty(AddBeneficiariesPopupComponent.prototype, "contactControls", {
        /**
         * get list of controls from contacts form
         */
        get: function () {
            return this.contactsForm.get('contacts');
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * add contacts list to FormArray controls
     */
    AddBeneficiariesPopupComponent.prototype.buildContacts = function () {
        var _this = this;
        var array = this.contacts.map(function (contact) {
            var isCheckedItem = _this.beneficiaries.getBeneficiaries()
                .filter(function (e) { return e.user_caretaker_id === contact.user_caretaker_id; }).length > 0;
            if (isCheckedItem) {
                _this.newContacts.push(contact);
            }
            return _this.fb.control(isCheckedItem);
        });
        return this.fb.array(array);
    };
    /**
     * manage local contact list
     */
    AddBeneficiariesPopupComponent.prototype.onCheckboxChanges = function (event, contact) {
        if (!event.target.checked) {
            var contacts = this.newContacts.filter(function (item) { return item.user_caretaker_id !== contact.user_caretaker_id; });
            this.newContacts = contacts;
        }
        if (event.target.checked) {
            this.newContacts.push(contact);
        }
        if (this.newContacts.length === 5) {
            this.crossAmount(true);
        }
        if (this.newContacts.length < 5) {
            this.crossAmount(false);
        }
    };
    /**
     * disable/enable checkboxes
     */
    AddBeneficiariesPopupComponent.prototype.crossAmount = function (isCrossAmount) {
        this.contactControls.controls.map(function (control) {
            if (!isCrossAmount) {
                control.enable();
                return;
            }
            if (!control.value && isCrossAmount) {
                control.disable();
            }
        });
    };
    /**
     * add contact to beneficiaries list
     */
    AddBeneficiariesPopupComponent.prototype.addToBeneficiaries = function () {
        this.beneficiaries.setBeneficiaries(this.newContacts);
        this.dialogRef.close();
    };
    AddBeneficiariesPopupComponent.ctorParameters = function () { return [
        { type: _core_services_helpers_service__WEBPACK_IMPORTED_MODULE_7__["HelpersService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_legalService_legal_service__WEBPACK_IMPORTED_MODULE_5__["LegalService"] },
        { type: _core_services_beneficiaries_service__WEBPACK_IMPORTED_MODULE_6__["BeneficiariesService"] }
    ]; };
    AddBeneficiariesPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-beneficiaries-popup',
            template: __webpack_require__(/*! raw-loader!./add-beneficiaries-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.html"),
            styles: [__webpack_require__(/*! ./add-beneficiaries-popup.component.scss */ "./src/app/features/estate-plan/popups/add-beneficiaries-popup/add-beneficiaries-popup.component.scss")]
        })
    ], AddBeneficiariesPopupComponent);
    return AddBeneficiariesPopupComponent;
}());



/***/ }),

/***/ "./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clr-btn {\n  display: block;\n  margin: 20px auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l4ZW1wbGFyL05ldyBXb3Jrc3BhY2UvQ0xPQ1IgUFJPSkVDVC9DTElFTlQgQ0xPTENSL2Nsb2NyL2Nsb2NyL3NyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcG9wdXBzL3Rlcm1zLWNvbmRpdGlvbnMtcG9wdXAvdGVybXMtY29uZGl0aW9ucy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcG9wdXBzL3Rlcm1zLWNvbmRpdGlvbnMtcG9wdXAvdGVybXMtY29uZGl0aW9ucy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZXN0YXRlLXBsYW4vcG9wdXBzL3Rlcm1zLWNvbmRpdGlvbnMtcG9wdXAvdGVybXMtY29uZGl0aW9ucy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHItYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG59IiwiLmNsci1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: TermsConditionsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPopupComponent", function() { return TermsConditionsPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsConditionsPopupComponent = /** @class */ (function () {
    function TermsConditionsPopupComponent() {
    }
    TermsConditionsPopupComponent.prototype.ngOnInit = function () {
    };
    TermsConditionsPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'terms-conditions-popup',
            template: __webpack_require__(/*! raw-loader!./terms-conditions-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions-popup.component.scss */ "./src/app/features/estate-plan/popups/terms-conditions-popup/terms-conditions-popup.component.scss")]
        })
    ], TermsConditionsPopupComponent);
    return TermsConditionsPopupComponent;
}());



/***/ }),

/***/ "./src/assets/static-data/staticText.ts":
/*!**********************************************!*\
  !*** ./src/assets/static-data/staticText.ts ***!
  \**********************************************/
/*! exports provided: staticText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticText", function() { return staticText; });
var staticText = {
    tooltips: {
        account_name: "\n      Give a meaningful and unique name so you can identify what information you have in this account.<br>\n      For example, it can be MyGmail or, MyPayPal, PrimaryHome-Mortgage etc.When creating an Account, you will notice, there are several fields that let you input more information about this account.\n      Don\u2019t worry if you can\u2019t fill all the fields. \n      You can use the notes section to store additional details about an account.",
        password_hint: "\n      DO NOT STORE PASSWORD.<br>\n      A Password hint is a cue that enables you to remember your actual password. You can have a decoder on a separate location and share it separately.<br>\n      For example, if your password is 1969Ray78759, a combination of : <br>\n      - Your Year of birth \u2013 1969 <br>\n      - Your first name \u2013 Ray <br>\n      - Your zip code \u2013 78759 <br>\n      You can create a Password Hint for this password, such as: YrBornNameZip<br>\n      We don\u2019t recommend saving your actual password, which is why we give you the safer route of setting password hints.",
        account_group: "\n      The Account Group allows you to organize your Accounts and group them by relevance. Think of the account group as a drawer in the file cabinet.<br>\n      For example, you can bundle all your home-related accounts under the \u2018Home\u2019 Account Group, and all your finance related accounts under the \u2018Financial\u2019 Account group.",
        account_user_id: "User ID to login to this account",
        website_address: "Website URL / address",
        note: "Free form information. See the Sample for some ideas."
    }
};


/***/ })

}]);
//# sourceMappingURL=features-estate-plan-estate-plan-module-es5.js.map
dart_library.library('unittest', null, /* Imports */[
  'dart_sdk',
  'matcher'
], function(exports, dart_sdk, matcher) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interfaces = matcher.src__interfaces;
  const src__util = matcher.src__util;
  const src__description = matcher.src__description;
  const src__numeric_matchers = matcher.src__numeric_matchers;
  const src__error_matchers = matcher.src__error_matchers;
  const src__core_matchers = matcher.src__core_matchers;
  const src__iterable_matchers = matcher.src__iterable_matchers;
  const src__string_matchers = matcher.src__string_matchers;
  const src__operator_matchers = matcher.src__operator_matchers;
  const src__map_matchers = matcher.src__map_matchers;
  const unittest = Object.create(null);
  unittest.group = function(name, body) {
    return js.context.callMethod('suite', dart.list([name, body], core.Object));
  };
  dart.fn(unittest.group, dart.void, [core.String, dart.functionType(dart.void, [])]);
  unittest.test = function(name, body, opts) {
    let skip = opts && 'skip' in opts ? opts.skip : null;
    if (skip != null) {
      core.print(`SKIP ${name}: ${skip}`);
      return;
    }
    let result = dart.as(js.context.callMethod('test', dart.list([name, dart.fn(done => {
        function _finishTest(f) {
          if (dart.is(f, async.Future)) {
            f.then(_finishTest);
          } else {
            done.apply([]);
          }
        }
        dart.fn(_finishTest);
        _finishTest(body());
      }, dart.dynamic, [js.JsFunction])], core.Object)), js.JsObject);
    result.set('async', 1);
  };
  dart.fn(unittest.test, dart.void, [core.String, dart.functionType(dart.dynamic, [])], {skip: core.String});
  unittest.TestFailure = class TestFailure extends core.Object {
    TestFailure(message) {
      this.message = message;
    }
    toString() {
      return this.message;
    }
  };
  dart.setSignature(unittest.TestFailure, {
    constructors: () => ({TestFailure: [unittest.TestFailure, [core.String]]})
  });
  unittest.ErrorFormatter = dart.typedef('ErrorFormatter', () => dart.functionType(core.String, [dart.dynamic, src__interfaces.Matcher, core.String, core.Map, core.bool]));
  unittest.expect = function(actual, matcher, opts) {
    let reason = opts && 'reason' in opts ? opts.reason : null;
    let verbose = opts && 'verbose' in opts ? opts.verbose : false;
    let formatter = opts && 'formatter' in opts ? opts.formatter : null;
    matcher = src__util.wrapMatcher(matcher);
    let matchState = dart.map();
    try {
      if (dart.notNull(dart.as(dart.dsend(matcher, 'matches', actual, matchState), core.bool))) return;
    } catch (e) {
      let trace = dart.stackTrace(e);
      if (reason == null) {
        reason = `${typeof e == 'string' ? e : dart.toString(e)} at ${trace}`;
      }
    }

    if (formatter == null) formatter = unittest._defaultFailFormatter;
    unittest.fail(dart.dcall(formatter, actual, matcher, reason, matchState, verbose));
  };
  dart.fn(unittest.expect, dart.void, [dart.dynamic, dart.dynamic], {reason: core.String, verbose: core.bool, formatter: unittest.ErrorFormatter});
  unittest.fail = function(message) {
    return dart.throw(new unittest.TestFailure(message));
  };
  dart.fn(unittest.fail, dart.void, [core.String]);
  unittest._defaultFailFormatter = function(actual, matcher, reason, matchState, verbose) {
    let description = new src__description.StringDescription();
    description.add('Expected: ').addDescriptionOf(matcher).add('\n');
    description.add('  Actual: ').addDescriptionOf(actual).add('\n');
    let mismatchDescription = new src__description.StringDescription();
    matcher.describeMismatch(actual, mismatchDescription, matchState, verbose);
    if (dart.notNull(mismatchDescription.length) > 0) {
      description.add(`   Which: ${mismatchDescription}\n`);
    }
    if (reason != null) description.add(reason).add('\n');
    return description.toString();
  };
  dart.fn(unittest._defaultFailFormatter, core.String, [dart.dynamic, src__interfaces.Matcher, core.String, core.Map, core.bool]);
  unittest.isPositive = src__numeric_matchers.isPositive;
  unittest.isRangeError = src__error_matchers.isRangeError;
  unittest.isStateError = src__error_matchers.isStateError;
  unittest.equals = src__core_matchers.equals;
  unittest.CustomMatcher = src__core_matchers.CustomMatcher;
  unittest.inOpenClosedRange = src__numeric_matchers.inOpenClosedRange;
  unittest.pairwiseCompare = src__iterable_matchers.pairwiseCompare;
  unittest.equalsIgnoringCase = src__string_matchers.equalsIgnoringCase;
  unittest.isUnimplementedError = src__error_matchers.isUnimplementedError;
  unittest.hasLength = src__core_matchers.hasLength;
  unittest.StringDescription = src__description.StringDescription;
  unittest.allOf = src__operator_matchers.allOf;
  unittest.isNegative = src__numeric_matchers.isNegative;
  unittest.isInstanceOf$ = src__core_matchers.isInstanceOf$;
  unittest.isInstanceOf = src__core_matchers.isInstanceOf;
  unittest.isNaN = src__core_matchers.isNaN;
  unittest.lessThan = src__numeric_matchers.lessThan;
  unittest.isNotEmpty = src__core_matchers.isNotEmpty;
  unittest.greaterThanOrEqualTo = src__numeric_matchers.greaterThanOrEqualTo;
  unittest.endsWith = src__string_matchers.endsWith;
  unittest.isConcurrentModificationError = src__error_matchers.isConcurrentModificationError;
  unittest.containsValue = src__map_matchers.containsValue;
  unittest.isFalse = src__core_matchers.isFalse;
  unittest.isTrue = src__core_matchers.isTrue;
  unittest.Matcher = src__interfaces.Matcher;
  unittest.lessThanOrEqualTo = src__numeric_matchers.lessThanOrEqualTo;
  unittest.matches = src__string_matchers.matches;
  unittest.returnsNormally = src__core_matchers.returnsNormally;
  unittest.TypeMatcher = src__core_matchers.TypeMatcher;
  unittest.inExclusiveRange = src__numeric_matchers.inExclusiveRange;
  unittest.equalsIgnoringWhitespace = src__string_matchers.equalsIgnoringWhitespace;
  unittest.isIn = src__core_matchers.isIn;
  unittest.isNotNaN = src__core_matchers.isNotNaN;
  unittest.isNonZero = src__numeric_matchers.isNonZero;
  unittest.startsWith = src__string_matchers.startsWith;
  unittest.isNullThrownError = src__error_matchers.isNullThrownError;
  unittest.isEmpty = src__core_matchers.isEmpty;
  unittest.anyOf = src__operator_matchers.anyOf;
  unittest.unorderedMatches = src__iterable_matchers.unorderedMatches;
  unittest.isZero = src__numeric_matchers.isZero;
  unittest.isList = src__core_matchers.isList;
  unittest.escape = src__util.escape;
  unittest.isCyclicInitializationError = src__error_matchers.isCyclicInitializationError;
  unittest.anyElement = src__iterable_matchers.anyElement;
  unittest.anything = src__core_matchers.anything;
  unittest.contains = src__core_matchers.contains;
  unittest.isUnsupportedError = src__error_matchers.isUnsupportedError;
  unittest.isNonPositive = src__numeric_matchers.isNonPositive;
  unittest.isNot = src__operator_matchers.isNot;
  unittest.same = src__core_matchers.same;
  unittest.inClosedOpenRange = src__numeric_matchers.inClosedOpenRange;
  unittest.predicate = src__core_matchers.predicate;
  unittest.isNotNull = src__core_matchers.isNotNull;
  unittest.wrapMatcher = src__util.wrapMatcher;
  unittest.isNoSuchMethodError = src__error_matchers.isNoSuchMethodError;
  unittest.unorderedEquals = src__iterable_matchers.unorderedEquals;
  unittest.everyElement = src__iterable_matchers.everyElement;
  unittest.addStateInfo = src__util.addStateInfo;
  unittest.isArgumentError = src__error_matchers.isArgumentError;
  unittest.isException = src__error_matchers.isException;
  unittest.inInclusiveRange = src__numeric_matchers.inInclusiveRange;
  unittest.containsPair = src__map_matchers.containsPair;
  unittest.isFormatException = src__error_matchers.isFormatException;
  unittest.orderedEquals = src__iterable_matchers.orderedEquals;
  unittest.collapseWhitespace = src__string_matchers.collapseWhitespace;
  unittest.greaterThan = src__numeric_matchers.greaterThan;
  unittest.isNonNegative = src__numeric_matchers.isNonNegative;
  unittest.isNull = src__core_matchers.isNull;
  unittest.isMap = src__core_matchers.isMap;
  unittest.stringContainsInOrder = src__string_matchers.stringContainsInOrder;
  unittest.closeTo = src__numeric_matchers.closeTo;
  unittest.Description = src__interfaces.Description;
  // Exports:
  exports.unittest = unittest;
});

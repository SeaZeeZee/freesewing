// This file is auto-generated.
// Changes you make will be overwritten.
import Pattern from './dist/index.mjs'

// Shared tests
import { testPatternConfig } from '../../../tests/patterns/config.mjs'
import { testPatternDrafting } from '../../../tests/patterns/drafting.mjs'
import { testPatternSampling } from '../../../tests/patterns/sampling.mjs'

// Test config
testPatternConfig("lunetius", new Pattern())

// Test drafting
testPatternDrafting("lunetius", Pattern)

// Test sampling
testPatternSampling( "lunetius", Pattern)

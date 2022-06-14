import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'script/animation_text2.js',
    output: { file: 'animation_text_converted.js' },
    plugins : [
        resolve({ browser: true }),
        terser(),
    ]
};
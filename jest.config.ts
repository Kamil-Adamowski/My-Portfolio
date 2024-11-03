import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest', // Użycie ts-jest do obsługi TypeScript
    testEnvironment: 'jsdom', // Ustawienie środowiska testowego na Node
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Rozszerzenia plików
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // Dodano `tsx?`, aby uwzględnić zarówno .ts, jak i .tsx
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Transformacja plików TypeScript
    },
    coverageDirectory: 'coverage', // Katalog do wyników pokrycia kodu
    collectCoverage: true, // Włącz zbieranie pokrycia
};

export default config;

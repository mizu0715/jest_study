test('to greater than', () => {
  expect(10).toBeGreaterThan(9);
});

test('not to greater than', () => {
  expect(5).not.toBeGreaterThan(6); // toBeLessThan
});


/**
 * tsconfigで「"isolatedModules": true」が設定されている場合、
 * importやexportなどしていてモジュールと識別されないとコンパイルエラーなる
 * 
 * tsconfig.test.jsonを作成して「"isolatedModules": false」で上書き
 * jest.congig.jsでtsconfig.test.json読み込んめばテストは実行できるが、エディタ上では警告が出たまま
 * 
 * とりあえずこれ入れとけばエラー出ない
 * 実際のテストは大体モジュールimportするのであまり影響ない
 */
export {}

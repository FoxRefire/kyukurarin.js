## ウィンドウ描画関数のリファレンス

### (o)pen

新規ウィンドウを表示しアセットを描画します。

```javascript
o(id, asNum, x, y, autoMoveAction)
```

##### 引数

* **id[string/required]**
  
  表示対象とするアセットのIDを指定します。

* **asNum[number/required]**
  
  この値は描画するウィンドウを後から制御する際の名前として使用されます。

* **x[number/required]**
  
  ウィンドウを表示するX軸の相対座標を指定します。

* **y[number/required]**
  
  ウィンドウを表示するY軸の相対座標を指定します。

* **autoMoveAction[number/optional]**
  
  関数が呼び出されたとき、自動でウィンドウの移動を行うルールを指定します。
  
  1：自身を移動対象として登録
  
  2: 移動対象を移動させる
  
  3: 自身を移動対象として登録し、既存の移動対象の移動も行う

### (c)lose

指定したウィンドウを閉じます。

```javascript
c(asNum0, asNum1)
```

##### 引数

- **asNum0[number/required]**
  
  閉じるウィンドウの番号、またはその開始値を指定します。

- **asNum1[number/optional]**
  
  閉じるウィンドウの終了値を指定します。
  
  この引数が与えられなかった場合 *asNum0* で指定したウィンドウのみを閉じます。

### 

### (m)ove

指定したウィンドウを左方向に移動させます。

```javascript
m(asNum0, asNum1)
```

##### 引数

- **asNum0[number/required]**
  
  移動させるウィンドウの番号、またはその開始値を指定します。

- **asNum1[number/optional]**
  
  移動させるウィンドウの終了値を指定します。
  
  この引数が与えられなかった場合 *asNum0* で指定したウィンドウのみを移動します。



### (t)op

指定したウィンドウを最前面に移動します。

```javascript
t(asNum)
```

##### 引数

- **asNum[number/required]**
  
  最前面に移動させるウィンドウの番号を指定します。



### (r)erender

指定したウィンドウを新しいアセットで再描画します。

```javascript
c(asNum, id)
```

##### 引数

- **asNum[number/required]**
  
  閉じるウィンドウの番号、或いはその開始値を指定します。

- **id[number/optional]**
  
  表示対象とするアセットのIDを指定します。



### (w)ait

音源が指定時間になるまで次の処理を待機します。

```javascript
t(time)
```

##### 引数

- **time[number/required]**
  
  ここで与えられた秒数まで音源が再生されるまで、次の処理は待機されます。

// react-quill 用カスタムツールバー
// ID "toolbar" を ContentEditor 側の modules.toolbar.container で参照

export default function CustomToolbar() {
  return (
    <div id="toolbar">
      <span className="ql-formats">
        <button className="ql-bold" title="太字 (Ctrl+B)" />
        <button className="ql-italic" title="斜体 (Ctrl+I)" />
        <button className="ql-underline" title="下線 (Ctrl+U)" />
        <button className="ql-strike" title="打ち消し (Ctrl+Shift+X)" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" title="番号付きリスト (Ctrl+Shift+7)" />
        <button className="ql-list" value="bullet" title="箇条書き (Ctrl+Shift+8)" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" title="リンク (Ctrl+K)" />
        <button className="ql-code-block" title="コードブロック (Ctrl+Alt+L)" />
      </span>
    </div>
  );
}


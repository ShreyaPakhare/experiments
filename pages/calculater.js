function Calculater() {
  return (
    <section className="w-full min-h-[80vh] font-montserrat p-4 md:p-10">
        <h1 className="text-2xl font-bold mb-4">Calculater :-</h1>
        <pre>
        &lt;html&gt; <br />
        &lt;head&gt; <br />
        &lt;title&gt;Calculator&lt;/title&gt; <br />
        &lt;script&gt; <br />
        function calc() {'{'} <br />
        var n1=parseInt(document.getElementById('n1').value); <br />
        var n2=parseInt(document.getElementById('n2').value); <br />
        var oper=document.getElementById('operators').value; <br />
        if(oper === '+') {'{'} <br />
        document.getElementById('result').value=n1+n2; <br />
        {'}'} <br />
        if(oper === '-') {'{'} <br />
        document.getElementById('result').value=n1-n2; <br />
        {'}'} <br />
        if(oper === '/') {'{'} <br />
        document.getElementById('result').value=n1/n2; <br />
        {'}'} <br />
        if(oper === '*') {'{'} <br />
        document.getElementById('result').value=n1*n2; <br />
        {'}'} <br />
        {'}'} <br />
        &lt;/script&gt; <br />
        &lt;/head&gt; <br />
        &lt;body&gt; <br />
        &lt;lable for="n1"&gt;N1:&lt;/lable&gt; <br />
        &lt;input type="text" id="n1" /&gt;&lt;/br&gt;&lt;/br&gt; <br />
        &lt;lable for="n2"&gt;N2:&lt;/lable&gt; <br />
        &lt;input type="text" id="n2" /&gt;&lt;/br&gt;&lt;/br&gt; <br />
        &lt;select id="operators"&gt; <br />
        &lt;option value="+"&gt;+&lt;/option&gt; <br />
        &lt;option value="-"&gt;-&lt;/option&gt; <br />
        &lt;option value="/"&gt;/&lt;/option&gt; <br />
        &lt;option value="*"&gt;*&lt;/option&gt; <br />
        &lt;/select&gt; <br />
        &lt;lable&gt;Result:&lt;/lable&gt; <br />
        &lt;button onclick="calc();"&gt;=&lt;/button&gt; <br />
        &lt;input type="text" id="result" /&gt; <br />
        &lt;/body&gt; <br />
        &lt;/html&gt; <br />
        </pre>
    </section>
  );
};

export default Calculater;
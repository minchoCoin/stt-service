"use strict";
(self["webpackChunkpsqli"] = self["webpackChunkpsqli"] || []).push([
    [443], {
        807: function(e, a, l) {
            l.r(a), l.d(a, {
                default: function() {
                    return y
                }
            });
            var o = l(252),
                t = l(963);
            const n = e => ((0, o.dD)("data-v-68900ef1"), e = e(), (0, o.Cn)(), e),
                i = {
                    class: "board-list"
                },
                s = {
                    class: "mb-3"
                },
                d = {
                    class: "mb-3"
                },
                r = n((() => (0, o._)("option", {
                    value: "en-US"
                }, "English (US)", -1))),
                c = n((() => (0, o._)("option", {
                    value: "ko-KR"
                }, "Korean", -1))),
                p = n((() => (0, o._)("option", {
                    value: "ja-JP"
                }, "Japanese", -1))),
                u = n((() => (0, o._)("option", {
                    value: "zh-CN"
                }, "Chinese", -1))),
                m = [r, c, p, u],
                f = {
                    class: "mb-3"
                },
                h = n((() => (0, o._)("div", {
                    class: "text-center"
                }, [(0, o._)("button", {
                    type: "submit",
                    class: "btn btn-color px-5 mb-5 w-100"
                }, "Submit")], -1)));

            function b(e, a, l, n, r, c) {
                return (0, o.wg)(), (0, o.iD)("div", i, [(0, o._)("form", {
                    onSubmit: a[3] || (a[3] = (0, t.iM)(((...e) => c.submit && c.submit(...e)), ["prevent"])),
                    class: "card-body cardbody-color p-lg-5"
                }, [(0, o._)("div", s, [(0, o.wy)((0, o._)("input", {
                    type: "email",
                    class: "form-control",
                    id: "email",
                    "onUpdate:modelValue": a[0] || (a[0] = e => r.email = e),
                    placeholder: "example@example.com"
                }, null, 512), [
                    [t.nr, r.email]
                ])]), (0, o._)("div", d, [(0, o.wy)((0, o._)("select", {
                    class: "form-control",
                    "onUpdate:modelValue": a[1] || (a[1] = e => r.languageCode = e)
                }, m, 512), [
                    [t.bM, r.languageCode]
                ])]), (0, o._)("div", f, [(0, o._)("input", {
                    class: "form-control",
                    id: "customFile",
                    type: "file",
                    onChange: a[2] || (a[2] = (...e) => c.handleFileUpload && c.handleFileUpload(...e)),
                    accept: ".mp3"
                }, null, 32)]), h], 32)])
            }
            var g = {
                    data() {
                        return {
                            email: "",
                            filename: "",
                            languageCode: "en-US",
                            base64File: null
                        }
                    },
                    methods: {
                        async submit() {
                            if (!this.email || !this.base64File || !this.languageCode) return void alert("Please provide all required fields.");
                            const e = new FormData;
                            e.append("email", this.email), e.append("filename", this.filename), e.append("languagecode", this.languageCode), e.append("file", this.base64File), console.log("Sending data to server:", e);
                            try {
                                const a = await fetch("https://xxxxxxxx.execute-api.ap-northeast-2.amazonaws.com/prod/file-upload", {
                                    method: "POST",
                                    body: e
                                });
                                if (console.log("Fetch response:", a), !a.ok) {
                                    const e = await a.json();
                                    throw new Error(e.error || "Upload failed")
                                }
                                const l = await a.json();
                                console.log(l), alert("File and email uploaded successfully")
                            } catch (a) {
                                console.error("Error:", a), alert(`File and email upload failed: ${a.message}`)
                            }
                        },
                        handleFileUpload(e) {
                            const a = e.target.files[0];
                            if (a) {
                                if ("audio/mpeg" !== a.type) return void alert("Only MP3 files are allowed");
                                this.filename = a.name;
                                const e = new FileReader;
                                e.readAsDataURL(a), e.onload = () => {
                                    const a = e.result.split(",")[1],
                                        l = new Blob([a], {
                                            type: "text/plain"
                                        });
                                    this.base64File = new File([l], "base64.txt", {
                                        type: "text/plain"
                                    })
                                }
                            }
                        }
                    }
                },
                v = l(744);
            const w = (0, v.Z)(g, [
                ["render", b],
                ["__scopeId", "data-v-68900ef1"]
            ]);
            var y = w
        }
    }
]);
//# sourceMappingURL=about.de8a5e62.js.map
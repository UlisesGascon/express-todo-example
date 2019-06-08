exports.index = function (req, res, next) {
  res.send('/')
}

exports.create = function (req, res, next) {
  res.send('/create')
}

exports.destroy = function (req, res, next) {
  const id = req.params.id
  res.send(`/destroy/${id}`)
}

exports.edit = function (req, res, next) {
  const id = req.params.id
  res.send(`/edit/${id}`)
}

exports.update = function (req, res, next) {
  const id = req.params.id
  res.send(`/update/${id}`)
}

class LessFilter < TextFilter
  def filter(text)
    parser = Less::Parser.new
    tree = parser.parse(text)
    tree.to_css(:compress => true)
  end
end
